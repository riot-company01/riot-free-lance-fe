import styled from "@emotion/styled";
import { Button } from "@mui/material";
import router from "next/router";

export function NotResult() {
  return (
    <NotResultWrapper>
      <As>該当する案件がありません。</As>
      <div>絞り込み条件を見直してください。</div>

      <Button
        variant="contained"
        sx={{
          maxWidth: 220,
          margin: "0 auto",
        }}
        onClick={() => {
          router.push({
            pathname: "works/",
          });
        }}
      >
        絞りみ条件をリセットする
      </Button>
    </NotResultWrapper>
  );
}

const NotResultWrapper = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding-top: 10%;
  flex-direction: column;
`;

const As = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
