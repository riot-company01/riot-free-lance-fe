import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

export function useAuth() {
  const router = useRouter();
  const { user } = useUser();
  async function execLogin() {
    await router.push("/api/auth/login");
  }
  async function execLogout() {
    await router.push("/api/auth/logout");
  }
  return {
    execLogin,
    execLogout,
    user,
  };
}
