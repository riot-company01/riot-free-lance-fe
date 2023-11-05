import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { loadingVar } from "@/global-state";

export function useAuth() {
  const router = useRouter();
  const { user } = useUser();

  async function execLogin() {
    loadingVar(true);
    await router.push("/api/auth/login");
    loadingVar(false);
  }
  async function execLogout() {
    loadingVar(true);
    await router.push("/api/auth/logout");
    loadingVar(false);
  }
  return {
    execLogin,
    execLogout,
    user,
  };
}
