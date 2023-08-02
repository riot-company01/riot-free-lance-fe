import styled from "@emotion/styled";
import { Button as _Button } from "@mui/material";
import { COLOR } from "@/styles/colors";

export const SelectedButton = styled(_Button)<{ width: number }>`
  height: 48px;
  width: ${({ width }) => width}px;
  margin: 4px;
  background-color: ${COLOR.BASE_COLOR.code};
  text-transform: none;
`;

export const NotSelectedStyle = styled(_Button)<{ width: number }>`
  height: 48px;
  width: ${({ width }) => width}px;
  margin: 4px;
  border: 1px solid ${COLOR.LIGHT_GRAY.code};
  color: ${COLOR.LIGHT_GRAY.code};
  text-transform: none;
`;
