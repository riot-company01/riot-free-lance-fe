import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAesssUplcBhfL0udHp0A_gSlviVd8SkrA",
  authDomain: "skill-sync-405012.firebaseapp.com",
  projectId: "skill-sync-405012",
  storageBucket: "skill-sync-405012.appspot.com",
  messagingSenderId: "564001403427",
  appId: "1:564001403427:web:bf4fb8858467567b763796",
  measurementId: "G-Z7F1SL8BHM",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const signUpEmailAndPassword = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser);
  }

  return user;
};
const signInEmailAndPassword = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser);
  }

  return user;
};
export { auth, googleProvider, githubProvider, signUpEmailAndPassword, signInEmailAndPassword };
