import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { NoItem } from "@/components/user/common/no-item";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetUserToWorksDocument } from "@/lib/graphql/graphql";

function Favorite() {
  const { user } = useUser();
  const { data: userToWorksData } = useQuery(GetUserToWorksDocument, {
    variables: {
      id: user?.sub as string,
    },
  });

  if (userToWorksData?.users_by_pk?.userToFavoritedWorks.length !== 0) {
    return <NoItem pageTitle="favorite" />;
  }

  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        {/* <FavoriteLg worksData={worksData} favoriteData={favoriteData?.users_by_pk} /> */}
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        {/* <FavoriteMd worksData={worksData} favoriteData={favoriteData?.users_by_pk} /> */}
      </Box>
    </>
  );
}

export default withPageAuthRequired(Favorite);
