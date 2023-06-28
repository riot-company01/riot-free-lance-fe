import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    // ログインの処理をここで行います
    await handleLogin(req, res, {
      returnTo: "/api/auth/callback", // ログイン成功後のリダイレクト先URLを指定します
    });
  },
});
