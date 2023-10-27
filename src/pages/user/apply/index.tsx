import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import AppliedLg from "@/components/user/apply/lg";
import AppliedMd from "@/components/user/apply/md";
import { NoItem } from "@/components/user/common/no-item";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetAppliedDocument, GetUserToFavoritedWorksDocument } from "@/lib/graphql/graphql";

function Apply() {
  const { user } = useUser();

  const { data: worksData } = useQuery(GetAppliedDocument, {
    fetchPolicy: "network-only",
    variables: {
      id: user?.sub,
    },
  });

  const { data: favoriteData } = useQuery(GetUserToFavoritedWorksDocument, {
    fetchPolicy: "network-only",
    variables: { id: user?.sub || "" },
  });

  if (
    worksData?.users.length === 0 ||
    worksData?.users[0].userToApplyWorks.length === 0 ||
    favoriteData?.users_by_pk?.userToFavoritedWorks.length === 0 ||
    favoriteData?.users_by_pk?.userToFavoritedWorks.length === 0
  ) {
    return <NoItem pageTitle="apply" />;
  }
  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <AppliedLg worksData={worksData} favoriteData={favoriteData?.users_by_pk} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <AppliedMd worksData={worksData} favoriteData={favoriteData?.users_by_pk} />
      </Box>
    </>
  );
}

export default withPageAuthRequired(Apply);
