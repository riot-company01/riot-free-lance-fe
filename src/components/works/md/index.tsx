import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";

import { useRouter } from "next/router";
import { Modal } from "@/components/common/modal";
import { Card } from "@/components/works/md/card";
import { Detail } from "@/components/works/md/detail";
import { Filter } from "@/components/works/md/filter";
import type { GetSkillsQuery, GetWorksQuery } from "@/lib/graphql/graphql";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
};

export function WorksMd({ worksData, skills, selectedSkillIds }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  return (
    <Div>
      <Filter defaultFilters={skills} selectedSkillIds={selectedSkillIds} worksLength={worksData?.works.length} />
      <Wrapper>
        {worksData
          ? worksData?.works.map((item, idx) => {
              return <Card key={idx} item={item} />;
            })
          : [...Array(5)].map((_, idx) => {
              return <Skeleton key={idx} variant="rectangular" height={400} sx={{ borderRadius: 2 }} />;
            })}
      </Wrapper>
      <Modal
        open={!!id}
        title="案件詳細"
        onClose={() => {
          router.back();
        }}
      >
        <Detail defaultWorkId={id} />
      </Modal>
    </Div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Div = styled.div`
  padding: 0 16px;
`;
