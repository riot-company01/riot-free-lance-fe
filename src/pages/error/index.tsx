import styled from "@emotion/styled";

export default function error() {
  return (
    <CenteredContainer>
      <Message>ただいまこちらのページはメンテナンス中です</Message>
      <p>画面サイズは1024px以上で閲覧ください</p>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Message = styled.h1`
  font-size: 24px;
  color: #333;
`;
