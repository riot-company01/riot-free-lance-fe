import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo/client";
import { Global } from "@emotion/react";
import { GLOBAL_STYLE } from "@/styles/global-style";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";
import { Layout } from "@/components/common/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo();
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <ApolloProvider client={client}>
        <Global styles={GLOBAL_STYLE} />
        <Layout />
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
