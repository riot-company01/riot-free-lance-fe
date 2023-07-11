import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "react-loading";
import { Header } from "@/components/header";
import { ProjectList } from "@/components/project/list";
import type { GetUserQuery, GetUserQueryVariables } from "@/lib/graphql/graphql";
import { GetUserDocument } from "@/lib/graphql/graphql";
import { slackUrlVar } from "@/stores";

function ProjectPage() {
  const { user } = useUser();
  const { data } = useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, { variables: { id: user?.sub } });

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
