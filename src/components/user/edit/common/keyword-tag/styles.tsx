import styled from "@emotion/styled";
import { Typography as _Typography } from "@mui/material";
import { COLOR } from "@/styles/colors";

export const KeywordTag = styled(_Typography)`
  height: 48px;
  width: 150px;
  margin: 4px;
  text-transform: none;
  background-color: ${COLOR.BASE_COLOR.code};
  border-radius: 4px;
  color: ${COLOR.WHITE.code};
  display: flex;
  justify-content: center;
  align-items: center;
`;
