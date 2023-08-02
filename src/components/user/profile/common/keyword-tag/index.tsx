import * as Styles from "./styles";

type KeywordTagProps = {
  item: string;
  width: number;
};
export const KeywordTag = (props: KeywordTagProps) => {
  const { item, width } = props;
  return <Styles.KeywordTag width={width}>{item}</Styles.KeywordTag>;
};
