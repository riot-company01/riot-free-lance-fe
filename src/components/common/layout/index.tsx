import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <List>
          <Logo src="images/company-logo.png" alt="ライオット" />
        </List>
        <List>
          <CustomizedInputBase></CustomizedInputBase>
        </List>
        <List>検索履歴</List>
        <List>条件</List>
      </FlexContainer>
      <FlexContainer>
        <List>案件を探す</List>
        <List>エージェントを探す</List>
        <List>スカウト</List>
        <List>情報</List>
        <List>ログイン</List>
        <List>新規登録</List>
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
  :last-of-type {
    padding-right: 20px;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  height: 78px;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 100%;
`;

export function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: 300 }}
    >
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
