import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import NextLink from "next/link";

type Props = {
  name?: string | null;
};

export const Layout: React.FC<Props> = ({ name }) => {
  return (
    <Wrapper>
      <FlexContainer>
        <List>
          <NextLink href="#">
            <Logo src="images/company-logo.png" alt="ライオット" />
          </NextLink>
        </List>
      </FlexContainer>

      <FlexContainer>
        <NextLink href="/api/auth/logout">
          <List>{name}</List>
        </NextLink>
        <NextLink href="/api/auth/logout">
          <LastList>ログアウト</LastList>
        </NextLink>
      </FlexContainer>

      {/* <List>
          <CustomizedInputBase />
        </List>
        <NextLink href="#">
          <List>検索履歴</List>
        </NextLink>
        <NextLink href="#">
          <List>条件</List>
        </NextLink>
      </FlexContainer>
      <FlexContainer>
        <NextLink href="#">
          <List>案件を探す</List>
        </NextLink>
        <NextLink href="#">
          <List>エージェントを探す</List>
        </NextLink>
        <NextLink href="#">
          <List>スカウト</List>
        </NextLink>
        <NextLink href="#">
          <List>情報</List>
        </NextLink>
        <NextLink href="#">
          <List>ログイン</List>
        </NextLink>
        <NextLink href="#">
          <LastList>新規登録</LastList>
        </NextLink>
      </FlexContainer> */}
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

const Wrapper = styled.div`
  position: sticky;
  height: 78px;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid #dee2e6;
`;

export function CustomizedInputBase() {
  return (
    <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 300 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="キーワード検索 例:React"
        inputProps={{ "aria-label": "キーワード検索 例:React" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
