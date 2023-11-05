import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { FavoriteLg } from "@/components/user/favorite/lg";
import { FavoriteMd } from "@/components/user/favorite/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";

function Favorite() {
  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <FavoriteLg />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <FavoriteMd />
      </Box>
    </>
  );
}

export default withPageAuthRequired(Favorite);
