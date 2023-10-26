import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
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

  const secret = process.env.AUTH0_SECRET || process.env.AUT0_CLIENT_SECRET;
  console.log("Auth0 Secret:", secret);

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
