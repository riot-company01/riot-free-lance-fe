import styled from "@emotion/styled";
import { COLOR } from "@/styles/colors";

type Props = {
  isRequired: boolean;
};

export const Tag = ({ isRequired }: Props) => {
  return (
    <>
      {isRequired ? (
        <RequiredKeyword isRequired={isRequired}>必須</RequiredKeyword>
      ) : (
        <AnyKeyword isRequired={isRequired}>任意</AnyKeyword>
      )}
    </>
  );
};

export const AnyKeyword = styled.p<{ isRequired: boolean }>`
  text-align: center;
  margin: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 8px;
  color: ${COLOR.LIGHT_GRAY.code}s;
  border: 1px solid ${COLOR.LIGHT_GRAY.code};
`;

export const RequiredKeyword = styled.p<{ isRequired: boolean }>`
  text-align: center;
  margin: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 8px;
  border: 1px solid ${COLOR.RED.code};
  color: ${COLOR.RED.code};
`;
