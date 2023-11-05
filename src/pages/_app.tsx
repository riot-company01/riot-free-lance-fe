import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { blue, pink } from "@mui/material/colors";
import { StyledEngineProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { LayoutFooter } from "@/components/shared/layout/footer";
import { LayoutHeader } from "@/components/shared/layout/header";
import { BREAK_POINT } from "@/constants";
import { useCustomApollo } from "@/lib/apollo/client";
import { GLOBAL_STYLE } from "@/styles/global-style";
import "large-small-dynamic-viewport-units-polyfill";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useCustomApollo(pageProps);
  const { user } = pageProps;
  const redirect_uri = typeof window !== "undefined" ? `http://localhost:3000/works/api/auth/callback/` : undefined;
  const theme = createTheme({
    palette: {
      primary: blue,
      secondary: pink,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "https://dev-3obkayqmfl5rdnz2.jp.auth0.com"}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "EbnnOaqN4SUc3EYw0sembXxSJCA9cyD9"}
        authorizationParams={{
          redirect_uri,
        }}
      >
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
      </Auth0Provider>
    </ThemeProvider>
  );
}

export default MyApp;

const MaxWidth = styled.main`
  width: 100%;
  max-width: 1320px;
  margin: auto;
  min-height: calc(100svh - 128px);
  @media screen and (min-width: ${BREAK_POINT.md}px) {
    min-height: calc(100svh - 146px);
  }
`;
