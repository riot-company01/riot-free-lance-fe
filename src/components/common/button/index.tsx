import * as Styles from "./styles";

type Props = {
  text: string;
  borderColor: string;
  backGroundCalor: string;
  borderRadius?: number;
  height?: number;
  width?: number;
  onClick: () => void;
};

export const Button = (props: Props) => {
  const {
    text,
    borderColor,
    backGroundCalor,
    borderRadius,
    height,
    width,
    onClick,
  } = props;

  return (
    <Styles.ButtonWrapper
      name={"button"}
      borderColor={borderColor}
      backGroundColor={backGroundCalor}
      borderRadius={borderRadius}
      height={height}
      width={width}
      onClick={onClick}
    >
      <Styles.ParText>{text}</Styles.ParText>
    </Styles.ButtonWrapper>
  );
};
