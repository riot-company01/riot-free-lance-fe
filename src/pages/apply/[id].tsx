import { useQuery } from "@apollo/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { Apply as _Apply } from "@/components/apply";
import { useAuth } from "@/hooks/use-auth";
import { GetUserToApplyWorksDocument } from "@/lib/graphql/graphql";

function Apply() {
  const { user } = useAuth();
  const { data: userToWorksData } = useQuery(GetUserToApplyWorksDocument, { variables: { id: user?.sub } });

  return (
    <Box component="div">
      <_Apply userToWorksData={userToWorksData?.users[0].userToApplyWorks} />
    </Box>
  );
}

export default withPageAuthRequired(Apply);
