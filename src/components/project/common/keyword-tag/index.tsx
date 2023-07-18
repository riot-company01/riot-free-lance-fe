import * as Styles from "./styles";

type Props = {
  children: string;
};

export const KeywordTag = ({ children }: Props) => {
  return <Styles.PerKeyword>{children}</Styles.PerKeyword>;
};
