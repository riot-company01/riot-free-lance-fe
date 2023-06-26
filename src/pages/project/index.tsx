import { ProjectList } from "@/components/project/list";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Header } from "@/components/header";
import { Login } from "../../components/login";

export default function ProjectPage() {
  const { user } = useUser();
  console.log(user);
  return (
    <>
      {user ? (
        <>
          <Header />
          <ProjectList />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}