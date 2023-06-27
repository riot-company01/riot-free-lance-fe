import { ProjectList } from "@/components/project/list";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Header } from "@/components/header";
import { Login } from "../../components/login";
import { useGetUserQuery } from "@/lib/graphql/graphql";
import { slackUrlVar } from "@/stores";

export default function ProjectPage() {
  const { user } = useUser();
  const { data } = useGetUserQuery({ variables: { id: user?.sub } });
  slackUrlVar(data?.users[0].slackUrl);

  return (
    <>
      {user ? (
        <>
          <Header name={data?.users[0].name} />
          <ProjectList />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
