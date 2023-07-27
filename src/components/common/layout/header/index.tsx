import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { COLOR } from "@/styles/colors";
import { removeObjectKey } from "@/util/remove-object-key";

export const LayoutHeader: React.FC = () => {
  const { user } = useUser();
  return (
    <Wrapper>
      <FlexContainer>
        <NextLink href="#">
          <List>
            <Logo src="images/company-logo.png" alt="ライオット" />
          </List>
        </NextLink>

        <List>
          <CustomizedInputBase />
        </List>

        {/* <NextLink href="#">
          <List>検索履歴</List>
        </NextLink>
        <NextLink href="#">
          <List>条件</List>
        </NextLink> */}
      </FlexContainer>
      <FlexContainer>
        {/* <NextLink href="#">
          <List>案件を探す</List>
        </NextLink> */}
        {/* <NextLink href="#">
          <List>エージェントを探す</List>
        </NextLink> */}
        {/* <NextLink href="#">
          <List>スカウト</List>
        </NextLink> */}
        {/* <NextLink href="#">
          <List>情報</List>
        </NextLink> */}
        <List>{user?.name}</List>
        <NextLink href="/api/auth/logout">
          <LastList>ログアウト</LastList>
        </NextLink>
      </FlexContainer>
    </Wrapper>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
`;

const List = styled.div`
  font-size: 14px;
  padding-left: 20px;
`;
const LastList = styled.div`
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Wrapper = styled.header`
  position: fixed;
  z-index: 1000;
  height: 78px;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 100%;
  background-color: ${COLOR.WHITE.code};
`;

export function CustomizedInputBase() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  return (
    <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 300 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="言語・キーワードで検索"
        inputProps={{ "aria-label": "言語・キーワードで検索" }}
        // onKeyDown={(e) => {
        //   // e.preventDefault();
        // }}
        type="input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            const filteredQuery =
              inputValue !== ""
                ? {
                    ...router.query,
                    keyword: inputValue,
                  }
                : { ...removeObjectKey(router.query, "keyword") };
            router.push({
              pathname: "works/",
              query: {
                ...filteredQuery,
              },
            });
          }
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => {
          const filteredQuery =
            inputValue !== ""
              ? {
                  ...router.query,
                  keyword: inputValue,
                }
              : { ...removeObjectKey(router.query, "keyword") };
          router.push({
            pathname: "works/",
            query: {
              ...filteredQuery,
            },
          });
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
