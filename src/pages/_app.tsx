import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledEngineProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { LayoutFooter } from "@/components/common/layout/footer";
import { LayoutHeader } from "@/components/common/layout/header";
import { useCustomApollo } from "@/lib/apollo/client";
import { GLOBAL_STYLE } from "@/styles/global-style";
import "large-small-dynamic-viewport-units-polyfill";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useCustomApollo(pageProps);
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
          <Global styles={GLOBAL_STYLE} />
          <LayoutHeader />
          <MaxWidth>
            <Component {...pageProps} />
          </MaxWidth>
          <LayoutFooter />
        </ApolloProvider>
      </StyledEngineProvider>
    </UserProvider>
  );
}

export default MyApp;

const MaxWidth = styled.main`
  width: 100%;
  max-width: 1320px;
  margin: auto;
`;
