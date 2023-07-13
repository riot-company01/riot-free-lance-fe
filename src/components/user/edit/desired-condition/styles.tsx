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

export const DivButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px 0;
`;
