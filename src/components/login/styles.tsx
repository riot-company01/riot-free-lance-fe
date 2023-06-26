import styled from "@emotion/styled";

export const DivLoginWrapper = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivButtonWrapper = styled.div``;
