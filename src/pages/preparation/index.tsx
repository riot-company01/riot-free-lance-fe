import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { PATHS } from "@/const/paths";
import { COLOR } from "@/styles/colors";

export default function Preparation() {
  const { push } = useRouter();

  const transitWorksPage = () => {
    push(PATHS.PROJECT);
  };

  return (
    <CenteredContainer>
      <Container>
        <Message>ただいまこちらのページは準備中です</Message>
        <Button variant="contained" onClick={transitWorksPage}>
          案件ページに戻る
        </Button>
      </Container>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${COLOR.WHITE.code};
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.h1`
  font-size: 24px;
  color: #333;
`;
