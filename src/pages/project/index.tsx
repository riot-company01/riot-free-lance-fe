import { ProjectList } from "@/components/project/list";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Header } from "semantic-ui-react";

export default function ProjectPage() {
  const { user } = useUser();

  return (
    <>
      <Header />
      {user ? <ProjectList /> : <>ログインしてください。</>}
    </>
  );
}
