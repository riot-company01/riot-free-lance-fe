import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import * as Styles from "./styles";
import { Loading } from "../common/loading";

export const Header = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  return (
    <Styles.HeaderContainer>
      <Styles.ListContainer>
        <Styles.ListItem>{user?.name}</Styles.ListItem>
        <Styles.ListItem>
          <Link href="/api/auth/logout">Logout</Link>
        </Styles.ListItem>
      </Styles.ListContainer>
    </Styles.HeaderContainer>
  );
};
