import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo/client";
// import { GLOBAL_STYLE } from "@/styles/global-style";
// import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo();
  return (
    <ApolloProvider client={client}>
      {/* <Global styles={GLOBAL_STYLE} /> */}
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
