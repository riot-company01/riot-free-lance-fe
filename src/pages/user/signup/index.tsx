import { TextField } from "@mui/material";
import { signInWithPopup, signOut } from "firebase/auth";
import NextLink from "next/link";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, githubProvider, googleProvider, signUpEmailAndPassword } from "@/Auth/firebase";

function SignUp() {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signUpGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  const signUpGithub = () => {
    signInWithPopup(auth, githubProvider);
  };
  const signUpEmailAndPasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await signUpEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const LogOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <p>ユーザー登録</p>
      {user?.displayName && <p>{user?.displayName}</p>}
      <form onSubmit={signUpEmailAndPasswordSubmit}>
        <TextField type="text" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField type="password" variant="outlined" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">登録する</button>
      </form>
      <NextLink href={"/user/signin"}>ユーザー登録済みの人はこちら</NextLink>
      <div>
        <button onClick={signUpGoogle}>
          <p>google</p>
        </button>
      </div>
      <div>
        <button onClick={signUpGithub}>
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

export default SignUp;
