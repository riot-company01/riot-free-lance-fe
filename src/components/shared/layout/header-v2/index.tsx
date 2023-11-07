import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled as muiStyled } from "@mui/material";
import { blue } from "@mui/material/colors";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BREAK_POINT, COMMON_Z_INDEX, PATHS } from "@/constants";
import { removeObjectKey } from "@/util/remove-object-key";

export function HeaderV2() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const filteredQuery =
    inputValue !== ""
      ? {
          ...router.query,
          keyword: inputValue,
        }
      : { ...removeObjectKey(router.query, "keyword") };

  const { asPath } = router;
  console.log(asPath);
  return (
    <Wrapper>
      <RightWrapper className="left">
        <LogoWrapper>logo</LogoWrapper>
        <NavigWrapper>
          <NextLink href={PATHS.USER_PROFILE}>
            <List selected={asPath.startsWith(PATHS.USER_PROFILE)}>プロフィール</List>
          </NextLink>
          <NextLink href={PATHS.USER_FAVORITE}>
            <List selected={asPath.startsWith(PATHS.USER_FAVORITE)}>お気に入り</List>
          </NextLink>
          <NextLink href={PATHS.USER_APPLY}>
            <List selected={asPath.startsWith(PATHS.USER_APPLY)}>応募済み</List>
          </NextLink>
        </NavigWrapper>
      </RightWrapper>
      <LeftWrapper className="right">
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
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                e.preventDefault();
                router.push({
                  pathname: "works/",
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
  );
}

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  background-color: ${blue[500]};
  color: white;
  font-size: 14px;
  top: 0;
  z-index: ${COMMON_Z_INDEX.HEADER};
  justify-content: space-around;
  align-items: center;
  height: 45px;
  @media (min-width: ${BREAK_POINT.sm}px) {
    height: 49px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div``;

const NavigWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-size: 16px;
  margin-left: 40px;
`;

const LogoWrapper = styled.div`
  width: 70px;
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
  align-items: center;
  ${({ selected }) =>
    selected &&
    `
      font-weight: 700;
      border-bottom: 4px solid yellow;
    `}
  @media (min-width: ${BREAK_POINT.sm}px) {
    height: 48px;
  }
`;
