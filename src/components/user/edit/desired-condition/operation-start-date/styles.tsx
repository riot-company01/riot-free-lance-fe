import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{
  isSelected: boolean;
}>`
  border-radius: 8px;
  height: 48px;
  width: 308px;
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
  text-align: center;
`;

export const DivWrapper = styled.div`
  margin: 16px;
`;

export const SelectYear = styled.select`
  width: 380px;
  padding: 8px;
  border: 1px solid #a1a1a1;
  border-radius: 8px;
  appearance: none;
`;

export const SelectMount = styled.select`
  width: 200px;
  padding: 8px;
  border: 1px solid #a1a1a1;
  border-radius: 8px;
  margin-left: 32px;
  appearance: none;
`;

export const PerNote = styled.p`
  color: #a1a1a1;
  font-size: 12px;
`;
