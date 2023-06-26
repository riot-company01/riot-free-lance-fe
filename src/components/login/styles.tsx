import { SCREEN_SIZE } from "@/const/screen-size";
import styled from "@emotion/styled";

export const DivLoginWrapper = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLoginContent = styled.div`
  border-bottom: solid 6px #edf4fc;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
  border-radius: 9px;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    width: 90%;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) and(max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    width: 90%;
  }
`;

export const DivButtonWrapper = styled.div``;
