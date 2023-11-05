import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { loadingVar } from "@/global-state";

export function useAuth() {
  const router = useRouter();
  const { user } = useUser();

  async function execLogin() {
    !user && loadingVar(true);
    await router.push("/api/auth/login");
  }
  async function execLogout() {
    user && loadingVar(true);
    await router.push("/api/auth/logout");
  }
  return {
    execLogin,
    execLogout,
    user,
  };
}
