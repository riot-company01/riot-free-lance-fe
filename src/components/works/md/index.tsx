import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { Modal } from "@/components/common/modal";
import { Card } from "@/components/works/md/card";
import { Detail } from "@/components/works/md/detail";
import type { GetSkillsQuery, GetWorksQuery } from "@/lib/graphql/graphql";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
};

export function WorksMd({ worksData }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  return (
    <div>
      <Wrapper>
        {worksData
          ? worksData?.works.map((item, idx) => {
              return <Card key={idx} item={item} />;
            })
          : [...Array(5)].map((_, idx) => {
              return <Skeleton key={idx} variant="rectangular" height={400} sx={{ borderRadius: 2 }} />;
            })}
      </Wrapper>
      <Modal open={!!id}>
        <Detail defaultWorkId={id} />
      </Modal>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;
