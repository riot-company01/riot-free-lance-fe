import Link from "next/link";
import * as Styles from "./styles";

type Props = {
  name?: string;
};

export const Header = ({ name }: Props) => {
  return (
    <Styles.HeaderContainer>
      <Styles.ListContainer>
        <Styles.ListItem>{name}様</Styles.ListItem>
        <Styles.ListItem>
          <Link href="/api/auth/logout">ログアウト</Link>
        </Styles.ListItem>
      </Styles.ListContainer>
    </Styles.HeaderContainer>
  );
};
