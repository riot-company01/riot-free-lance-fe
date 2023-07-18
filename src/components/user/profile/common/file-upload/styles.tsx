import styled from "@emotion/styled";
import { COLOR } from "@/styles/colors";

export const LabelFileUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 280px;
  border-radius: 4px;
  color: ${COLOR.WHITE.code};
  background-color: ${COLOR.BASE_COLOR.code};
  cursor: pointer;
  > input {
    text-align: center;
  }
`;
