import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useApiRequest } from "@/components/works/hooks/use-api-request";
import { useQueryParam } from "@/components/works/hooks/use-query-param";
import { WorksLg } from "@/components/works/lg";
import { WorksMd } from "@/components/works/md";
import { NotResult } from "@/components/works/shared/not-result";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";

// export const getServerSideProps = withPageAuthRequired({
//   // @ts-ignore
//   async getServerSideProps() {
//     const client = initializeApollo({});
//     const documentProps = addApolloState(client, {
//       props: {},
//     });
//     return {
//       props: documentProps.props,
//     };
//   },
// });

function Works() {
  const { skillsData, worksData, user } = useApiRequest();
  const { selectedSkillIds } = useQueryParam();
  const [skills, setSkills] = useState<GetSkillsQuery["skills"] | undefined>([]);

  useEffect(() => {
    if (skillsData) {
      setSkills(skillsData?.skills);
    }
  }, [skillsData?.skills]);

  if (worksData?.works.length === 0) return <NotResult />;

  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <WorksLg skills={skills} selectedSkillIds={selectedSkillIds} worksData={worksData} user={user} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <WorksMd skills={skills} selectedSkillIds={selectedSkillIds} worksData={worksData} user={user} />
      </Box>
    </>
  );
}

export default Works;
