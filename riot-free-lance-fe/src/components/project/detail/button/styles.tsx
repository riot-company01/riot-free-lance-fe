import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{ borderColor: string; backGroundColor: string }>`
  background-color: ${({ backGroundColor }) => backGroundColor};
  border: ${({ borderColor }) => borderColor && `2px solid ${borderColor}`};
  border-radius: 28px;
  width: 200px;

  @media (max-width: 599px) {
    margin-bottom: 16px;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ParText = styled.p`
  color: white;
`;
