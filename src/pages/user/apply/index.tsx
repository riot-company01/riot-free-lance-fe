import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetAppliedDocument } from "@/lib/graphql/graphql";
import AppliedLg from "@/components/user/apply/lg";
import AppliedMd from "@/components/user/apply/md";

function Apply() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetAppliedDocument, {
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
        <AppliedLg worksData={worksData} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <AppliedMd worksData={worksData} />
      </Box>
    </>
  );
}

export default Apply;
