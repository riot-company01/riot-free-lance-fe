import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{
  isSelected: boolean;
}>`
  border-radius: 8px;
  height: 48px;
  width: 460px;
  margin: 4px;
  &:hover {
    cursor: pointer;
  }
  ${({ isSelected }) =>
    isSelected
      ? `
        background-color: #20b2aa;
        border: 1px solid #20b2aa;
        color:white;
      `
      : `
        border: 1px solid #a1a1a1;
        color:#a1a1a1;
  `};
`;

export const ParText = styled.p<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "white" : "#a1a1a1")};
`;
