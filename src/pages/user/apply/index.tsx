import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import AppliedLg from "@/components/user/apply/lg";
import AppliedMd from "@/components/user/apply/md";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import { GetAppliedDocument } from "@/lib/graphql/graphql";
import { NoItem } from "@/components/user/components/no-item";

function Apply() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetAppliedDocument, {
    variables: {
      id: user?.sub,
    },
  });

  if (worksData?.users.length === 0 || worksData?.users[0].user_to_works.length === 0) {
    return <NoItem pageTitle="apply" />;
  }
  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <AppliedLg allAppliedWorksData={worksData} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <AppliedMd allAppliedWorksData={worksData} />
      </Box>
    </>
  );
}

export default Apply;
