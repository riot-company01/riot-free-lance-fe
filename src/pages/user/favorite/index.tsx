import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box } from "@mui/material";
import { FavoriteLg } from "@/components/user/favorite/lg";
import { FavoriteMd } from "@/components/user/favorite/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { initializeApollo, addApolloState } from "@/lib/apollo/client";

export const getServerSideProps = withPageAuthRequired({
  // @ts-ignore
  async getServerSideProps() {
    const client = initializeApollo({});
    const documentProps = addApolloState(client, {
      props: {},
    });
    return {
      props: documentProps.props,
    };
  },
});

function UserFavorite() {
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

export default UserFavorite;
