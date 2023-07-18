import * as Styles from "./styles";

type KeywordTagProps = {
  item: string;
};
export const KeywordTag = ({ item }: KeywordTagProps) => {
  return <Styles.KeywordTag>{item}</Styles.KeywordTag>;
};
