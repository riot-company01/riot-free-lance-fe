import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { ApplyLg } from "@/components/apply/lg";
import { ApplyMd } from "@/components/apply/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetUserToWorksDocument } from "@/lib/graphql/graphql";

function Apply() {
  const { user } = useUser();
  const { data: userToWorksData } = useQuery(GetUserToWorksDocument, { variables: { id: user?.sub } });
  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <ApplyLg userToWorksData={userToWorksData?.users[0].userToApplyWorks} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <ApplyMd userToWorksData={userToWorksData?.users[0].userToApplyWorks} />
      </Box>
    </>
  );
}

export default withPageAuthRequired(Apply);
