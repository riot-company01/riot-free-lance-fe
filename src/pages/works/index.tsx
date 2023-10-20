import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useApiRequest } from "@/components/works/hooks/use-api-request";
import { WorksLg } from "@/components/works/lg";
import { WorksMd } from "@/components/works/md";
import { NotResult } from "@/components/works/shared/not-result";
import { LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";
import type { GetSkillsQuery, Works } from "@/lib/graphql/graphql";

function Works() {
  const { skillsData, worksData } = useApiRequest();
  const router = useRouter();
  const selectedSkillIds = (router.query["skill-ids"] as string | undefined)?.split(",") || [];
  const [skills, setSkills] = useState<GetSkillsQuery["skills"] | undefined>([]);

  useEffect(() => {
    if (skillsData) {
      setSkills(skillsData?.skills);
    }
  }, [skillsData?.skills]);

  if (worksData?.works.length === 0) {
    return <NotResult />;
  }

  return (
    <>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT },
        }}
      >
        <WorksLg skills={skills} selectedSkillIds={selectedSkillIds} worksData={worksData} />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT },
        }}
      >
        <WorksMd skills={skills} selectedSkillIds={selectedSkillIds} worksData={worksData} />
      </Box>
    </>
  );
}

export default Works;
