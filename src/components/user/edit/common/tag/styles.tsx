import styled from "@emotion/styled";

export const AnyKeyword = styled.p<{ isRequired: boolean }>`
  text-align: center;
  margin: 4px;
  padding: 0px 4px;
  border-radius: 4px;
  font-size: 8px;
  color: #a1a1a1;
  border: 1px solid #a1a1a1;
`;

export const RequiredKeyword = styled.p<{ isRequired: boolean }>`
  text-align: center;
  margin: 4px;
  padding: 0px 4px;
  border-radius: 4px;
  font-size: 8px;
  border: 1px solid #fa5a5a;
  color: #fa5a5a;
`;
