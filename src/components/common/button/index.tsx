import * as Styles from "./styles";

type Props = {
  text: string;
  width: number;
  backGround: string;
  borderColor?: string;
  fontColor: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  const { text, width, borderColor, backGround, fontColor, onClick } = props;

  return (
    <Styles.Button
      width={width}
      borderColor={borderColor}
      backGround={backGround}
      fontColor={fontColor}
      onClick={onClick}
    >
      {text}
    </Styles.Button>
  );
};
