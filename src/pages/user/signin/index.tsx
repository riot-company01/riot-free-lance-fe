import { TextField } from "@mui/material";
import { signInWithPopup, signOut } from "firebase/auth";
import NextLink from "next/link";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, githubProvider, googleProvider, signInEmailAndPassword } from "@/Auth/firebase";

function SignIn() {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  const signInGithub = () => {
    signInWithPopup(auth, githubProvider);
  };
  const signInEmailAndPasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await signInEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const LogOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <p>ログイン</p>
      {user?.displayName && <p>{user?.displayName}</p>}
      <form onSubmit={signInEmailAndPasswordSubmit}>
        <TextField type="text" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField type="password" variant="outlined" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">ログイン</button>
      </form>
      <NextLink href={"/user/signup"}>ユーザー登録がまだの人はこちら</NextLink>
      <div>
        <button onClick={signInGoogle}>
          <p>google</p>
        </button>
      </div>
      <div>
        <button onClick={signInGithub}>
          <p>github</p>
        </button>
      </div>
      {user && (
        <button onClick={LogOut}>
          <p>ログアウト</p>
        </button>
      )}
    </div>
  );
}

export default SignIn;
