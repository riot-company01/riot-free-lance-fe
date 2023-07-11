import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import deepMerge from "deepmerge";
import isEqual from "lodash-es/isEqual";
import "cross-fetch/polyfill";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://famous-walrus-45.hasura.app/v1/graphql",
    }),
    cache: new InMemoryCache(),
  });
};
export const initializeApollo = (initialState?: unknown) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.cache.extract();
    const data = deepMerge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const useCustomApollo = () => {
  const state =
    typeof window !== "undefined"
      ? // @ts-ignore
        window.__NEXT_DATA__.apolloState
      : undefined;
  const client = useMemo(() => {
    return initializeApollo(state);
  }, [state]);

  return client;
};
