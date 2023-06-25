import { FC } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import * as Styles from "./styles";

const Header: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Styles.HeaderContainer>
        <Styles.ListContainer>
          <Styles.ListItem>{user.name}</Styles.ListItem>
          <Styles.ListItem>        
             <Link href="/api/auth/logout">Logout</Link>
          </Styles.ListItem>
        </Styles.ListContainer>
      </Styles.HeaderContainer>
    );
  }

  return (
    <Styles.HeaderContainer>
      <Link href="/api/auth/login">Login</Link>
    </Styles.HeaderContainer>
  );
};

export default Header;