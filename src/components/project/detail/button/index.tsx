import * as Styles from "./styles";

type Props = { text: string; borderColor: string; backGroundCalor: string; hoverColor: string; onClick: () => void };

export const Button = (props: Props) => {
  const { text, borderColor, backGroundCalor, hoverColor, onClick } = props;

  return (
    <Styles.ButtonWrapper
      name={"button"}
      borderColor={borderColor}
      backGroundColor={backGroundCalor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      <Styles.ParText>{text}</Styles.ParText>
    </Styles.ButtonWrapper>
  );
};
