import * as Styles from "./styles";

type Props = {
  isRequired: boolean;
};

export const Tag = ({ isRequired }: Props) => {
  return (
    <>
      {isRequired ? (
        <Styles.RequiredKeyword isRequired={isRequired}>
          必須
        </Styles.RequiredKeyword>
      ) : (
        <Styles.AnyKeyword isRequired={isRequired}>任意</Styles.AnyKeyword>
      )}
    </>
  );
};
