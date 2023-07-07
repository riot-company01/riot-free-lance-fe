import { SCREEN_SIZE } from "@/const/screen-size";
import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{
  borderColor: string;
  backGroundColor: string;
  borderRadius?: number;
}>`
  background-color: ${({ backGroundColor }) => backGroundColor};
  border: ${({ borderColor }) => borderColor && `2px solid ${borderColor}`};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "0px"};
  width: 200px;
  padding: 8px;

  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    width: 90%;
    margin-bottom: 16px;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) and (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    width: 60%;
    margin-bottom: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ParText = styled.p`
  color: white;
`;
