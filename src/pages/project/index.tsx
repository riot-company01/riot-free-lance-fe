import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Loading from "react-loading";
import { ProjectList } from "@/components/project/list";
import { GetUserInfoDocument } from "@/lib/graphql/graphql";
import type { GetUserInfoQueryVariables, GetUserInfoQuery } from "@/lib/graphql/graphql";
import { slackUrlVar } from "@/stores";

function ProjectPage() {
  const { user } = useUser();
  const { data } = useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, {
    variables: { id: user?.sub },
  });

  slackUrlVar(data?.users[0].slackUrl);
  return (
    <>
      {user ? (
        <>
          <ProjectList />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default withPageAuthRequired(ProjectPage);
