import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import FavoriteLg from "@/components/user/lg";
import FavoriteMd from "@/components/user/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetFavoriedDocument } from "@/lib/graphql/graphql";

function Favorite() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetFavoriedDocument, {
    variables: {
      id: user?.sub,
    },
  });

  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <FavoriteLg worksData={worksData} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <FavoriteMd worksData={worksData} />
      </Box>
    </>
  );
}

export default Favorite;
