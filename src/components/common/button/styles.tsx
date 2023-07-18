import { Button as _Button, styled } from "@mui/material";
import { SCREEN_SIZE } from "@/const/screen-size";

export const Button = styled(_Button)<{ width: number; borderColor?: string; backGround: string; fontColor: string }>`
  height: 48px;
  width: ${({ width }) => width}px;
  margin: 4px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backGround }) => backGround};
  color: ${({ fontColor }) => fontColor};
  text-transform: none;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    width: 90%;
    margin-bottom: 16px;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) and (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    width: 60%;
    margin-bottom: 16px;
  }
`;
