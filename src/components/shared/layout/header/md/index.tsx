import { useReactiveVar } from "@apollo/client";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { InputBase, alpha, styled as muiStyled } from "@mui/material";
import { blue } from "@mui/material/colors";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { inputValueVar } from "@/components/shared/layout/header/shared-state";
import { RLogo } from "@/components/shared/logo";
import { PATHS } from "@/constants";
import { useAuth } from "@/hooks/use-auth";
import { removeObjectKey } from "@/util/remove-object-key";

export function HeaderMd() {
  const inputValue = useReactiveVar(inputValueVar);
  const router = useRouter();
  const { user } = useAuth();
  const filteredQuery =
    inputValue !== ""
      ? {
          ...router.query,
          keyword: inputValue,
        }
      : { ...removeObjectKey(router.query, "keyword") };

  const { asPath } = router;
  return (
    <>
      <Wrapper>
        <RightWrapper>
          <LogoWrapper>
            <NextLink href={PATHS.WORKS}>
              <RLogo />
            </NextLink>
          </LogoWrapper>
        </RightWrapper>
        <LeftWrapper>
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                onClick={() => {
                  router.push({
                    pathname: "works/",
                    query: {
                      ...filteredQuery,
                    },
                  });
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="キーワード検索..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                inputValueVar(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  e.preventDefault();
                  router.push({
                    pathname: `${PATHS.WORKS}`,
                    query: {
                      ...filteredQuery,
                    },
                  });
                }
              }}
            />
          </Search>
        </LeftWrapper>
      </Wrapper>
      <ButtonNavig>
        <NavigWrapper>
          <NextLink
            href={PATHS.USER_PROFILE}
            style={{
              width: "100%",
            }}
          >
            <List selected={asPath.startsWith(PATHS.USER_PROFILE)}>
              <PersonIcon />
              <Text>プロフィール</Text>
            </List>
          </NextLink>
          <NextLink
            href={PATHS.USER_FAVORITE}
            style={{
              width: "100%",
            }}
          >
            <List selected={asPath.startsWith(PATHS.USER_FAVORITE)}>
              <FavoriteIcon />
              <Text>お気に入り</Text>
            </List>
          </NextLink>
          <NextLink
            href={PATHS.USER_APPLY}
            style={{
              width: "100%",
            }}
          >
            <List selected={asPath.startsWith(PATHS.USER_APPLY)}>
              <SubscriptionsIcon />
              <Text>応募済み</Text>
            </List>
          </NextLink>
          <NextLink
            href={user ? "/api/auth/logout" : "/api/auth/login"}
            style={{
              width: "100%",
            }}
          >
            <List selected={false}>
              {user ? (
                <>
                  <LogoutIcon />
                  <Text>ログアウト</Text>
                </>
              ) : (
                <>
                  <LoginIcon />
                  <Text>ログイン</Text>
                </>
              )}
            </List>
          </NextLink>
        </NavigWrapper>
      </ButtonNavig>
    </>
  );
}

const ButtonNavig = styled.div`
  position: fixed;
  left: 0;
  background-color: ${blue[500]};
  width: 100%;
  bottom: 0;
  height: 45px;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

const LogoWrapper = styled.div`
  width: 40px;
`;

const Search = muiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "2rem",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const List = styled.div<{ selected: boolean }>`
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  ${({ selected }) =>
    selected &&
    `
      font-weight: 700;
      border-bottom: 4px solid yellow;
    `}
`;

const NavigWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  font-size: 10px;
`;
