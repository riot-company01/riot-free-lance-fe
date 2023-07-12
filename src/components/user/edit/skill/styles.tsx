import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";

export const DivEditBasicInfoWrapper = styled.div`
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeadTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const DivItem = styled.div`
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    display: flex;
    margin-top: 32px;
  }
`;

export const DivItemWrapper = styled.div`
  padding: 0 16px 0 16px;
`;

export const DivTitleWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
`;

export const DivWrpper = styled.div`
  margin: 8px 0 8px 16px;
`;

export const DivButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px 0;
`;

export const CancelButtonWrapper = styled.button`
  border-radius: 8px;
  height: 40px;
  width: 400px;
  &:hover {
    cursor: pointer;
  }

  border: 1px solid #a1a1a1;
  color: #a1a1a1;
`;

export const ParCancelText = styled.p`
  color: "#a1a1a1";
  text-align: center;
`;

export const KeepButtonWrapper = styled.button`
  border-radius: 8px;
  height: 40px;
  width: 400px;

  &:hover {
    cursor: pointer;
  }

  background-color: #5a85fa;
  border: 2px solid #5a85fa;
  color: white;
`;

export const ParKeepText = styled.p`
  color: "white";
  text-align: center;
`;
