import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LayoutFooter } from "@/components/common/layout/footer";
import { LayoutHeader } from "@/components/common/layout/header";
import { useMatchMedia } from "@/hooks/use-match-media";
import { useCustomApollo } from "@/lib/apollo/client";
import { GLOBAL_STYLE } from "@/styles/global-style";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useCustomApollo(pageProps);
  const { user } = pageProps;
  const { isPcSize } = useMatchMedia();
  const router = useRouter();

  useEffect(() => {
    if (!isPcSize) {
      router.push("/maintenance");
    }
  }, [isPcSize]);

  return (
    <UserProvider user={user}>
      <ApolloProvider client={client}>
        <Global styles={GLOBAL_STYLE} />
        <LayoutHeader />
        <MaxWidth>
          <Component {...pageProps} />
        </MaxWidth>
        <LayoutFooter />
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;

const MaxWidth = styled.main`
  width: 100%;
  max-width: 1320px;
  margin: auto;
  min-height: calc(100vh - 156px);
`;
