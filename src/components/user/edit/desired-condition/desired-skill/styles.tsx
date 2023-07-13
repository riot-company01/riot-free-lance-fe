import styled from "@emotion/styled";

export const DivSelectedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeadContentTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const DivButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px 0;
`;

export const DivItemsWrapper = styled.div`
  overflow: scroll;
  height: 560px;
`;

export const ModalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 760,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
