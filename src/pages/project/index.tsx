import { ProjectList } from "@/components/project/list";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useGetUserQuery } from "@/lib/graphql/graphql";
import { slackUrlVar } from "@/stores";
import { Header } from "@/components/header";
import Loading from "react-loading";

function ProjectPage() {
  const { user } = useUser();
  const { data } = useGetUserQuery({ variables: { id: user?.sub } });
  console.log(data);
  slackUrlVar(data?.users[0].slackUrl);
  return (
    <>
      {user ? (
        <>
          <Header name={user.name} />
          <ProjectList />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default withPageAuthRequired(ProjectPage);
