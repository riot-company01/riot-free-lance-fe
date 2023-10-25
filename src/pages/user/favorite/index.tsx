import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { NoItem } from "@/components/user/components/no-item";
import FavoriteLg from "@/components/user/favorite/lg";
import { FavoriteMd } from "@/components/user/favorite/md";
import { LG_BREAK_POINT, MD_BREAK_POINT, MD_GLOBAL_NAVIGATION } from "@/constants";
import { GetFavoriedDocument, GetFavoriteWorksDocument } from "@/lib/graphql/graphql";

function Favorite() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetFavoriedDocument, {
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
    worksData?.users[0].userToFavoritedWorks.length === 0 ||
    favoriteData?.users.length === 0 ||
    favoriteData?.users[0].userToFavoritedWorks.length === 0
  ) {
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
        <FavoriteLg worksData={worksData} favoriteData={favoriteData} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
          minHeight: `calc(100dvh - ${MD_GLOBAL_NAVIGATION.HEADER}px - ${MD_GLOBAL_NAVIGATION.FOOTER}px - 40px)`,
        }}
      >
        <FavoriteMd worksData={worksData} favoriteData={favoriteData} />
      </Box>
    </>
  );
}

export default withPageAuthRequired(Favorite);
