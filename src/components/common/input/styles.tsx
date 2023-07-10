import styled from "@emotion/styled";

export const InputField = styled.input<{ width: string }>`
  padding: 16px;
  width: ${({ width }) => width && `${width}`};
  border: 1px solid #a1a1a1;
  border-radius: 8px;
`;
