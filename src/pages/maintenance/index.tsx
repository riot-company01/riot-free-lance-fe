import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMatchMedia } from "@/hooks/use-match-media";
import { COLOR } from "@/styles/colors";

export default function Maintenance() {
  const { isPcSize } = useMatchMedia();
  const router = useRouter();

  useEffect(() => {
    if (isPcSize) {
      router.push("/works");
    }
  }, [isPcSize]);
  return (
    <CenteredContainer>
      <Container>
        <Message>ただいまこちらのページは準備中です</Message>
        <div>画面サイズは1024px以上で閲覧ください</div>
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
