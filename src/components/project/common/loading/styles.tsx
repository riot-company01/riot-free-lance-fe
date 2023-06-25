import styled from "@emotion/styled";

export const DivLoadingWrapper = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
