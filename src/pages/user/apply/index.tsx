import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import AppliedLg from "@/components/user/apply/lg";
import AppliedMd from "@/components/user/apply/md";
import { NoItem } from "@/components/user/components/no-item";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetAppliedDocument, GetFavoriteWorksDocument } from "@/lib/graphql/graphql";

function Apply() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetAppliedDocument, {
    fetchPolicy: "network-only",
    variables: {
      id: user?.sub,
    },
  });

  const { data: favoriteData } = useQuery(GetFavoriteWorksDocument, {
    fetchPolicy: "network-only",
    variables: { id: user?.sub },
  });

  if (
    worksData?.users.length === 0 ||
    worksData?.users[0].userToApplyWorks.length === 0 ||
    favoriteData?.users.length === 0 ||
    favoriteData?.users[0].userToFavoritedWorks.length === 0
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
        <AppliedLg worksData={worksData} favoriteData={favoriteData} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <AppliedMd worksData={worksData} favoriteData={favoriteData} />
      </Box>
    </>
  );
}

export default withPageAuthRequired(Apply);