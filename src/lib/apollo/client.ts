import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import deepMerge from "deepmerge";
import isEqual from "lodash-es/isEqual";
import "cross-fetch/polyfill";
import type { AppProps } from "next/app";
import { useMemo } from "react";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    queryDeduplication: false,
    connectToDevTools: true,
    link: new HttpLink({
      uri: "https://famous-walrus-45.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "tKvU0cHFeIRFtuXaqCD4bW6U7y3ocW16e6l8KphpYFZE8xVBotoglTsC7QKYDnBt",
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {},
    }),
  });
};
export const initializeApollo = (initialState?: unknown) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.cache.extract();
    const data = deepMerge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)))],
    });

    _apolloClient.cache.restore(data);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const useCustomApollo = (pageProps: AppProps["pageProps"]) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);

  return store;
};

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps["pageProps"]) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}
