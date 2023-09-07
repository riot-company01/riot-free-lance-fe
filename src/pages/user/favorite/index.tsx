import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import FavoriteLg from "@/components/user/favorite/lg";
import { FavoriteMd } from "@/components/user/favorite/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetFavoriedDocument, GetFavoriteWorksDocument } from "@/lib/graphql/graphql";
import { NoItem } from "@/components/user/components/no-item";

function Favorite() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetFavoriedDocument, {
    fetchPolicy: "network-only",
    variables: {
      id: user?.sub,
    },
  });

  const { data } = useQuery(GetFavoriteWorksDocument, { fetchPolicy: "network-only", variables: { id: user?.sub } });

  if (worksData?.users[0].works.length === 0 || data?.users[0].works.length === 0) {
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
        <FavoriteLg worksData={worksData} data={data} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <FavoriteMd worksData={worksData} data={data} />
      </Box>
    </>
  );
}

export default Favorite;
