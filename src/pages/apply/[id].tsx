import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { Apply as _Apply } from "@/components/apply";
import { GetUserToWorksDocument } from "@/lib/graphql/graphql";

function Apply() {
  const { user } = useUser();
  const { data: userToWorksData } = useQuery(GetUserToWorksDocument, { variables: { id: user?.sub } });

  return (
    <Box component="div">
      <_Apply userToWorksData={userToWorksData?.users[0].userToApplyWorks} />
    </Box>
  );
}

export default withPageAuthRequired(Apply);
