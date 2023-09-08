import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/common/modal";
import { Card } from "@/components/works/md/card";
import { Detail } from "@/components/works/md/detail";
import { Filter } from "@/components/works/md/filter";
import { BREAK_POINT } from "@/constants";
import { GetFavoriteWorksDocument } from "@/lib/graphql/graphql";
import type { GetSkillsQuery, GetWorksQuery } from "@/lib/graphql/graphql";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
};

export function WorksMd({ worksData, skills, selectedSkillIds }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<(number | undefined)[]>([]);
  const { user } = useUser();
  const { data } = useQuery(GetFavoriteWorksDocument, { variables: { id: user?.sub } });

  useEffect(() => {
    if (!data || !worksData) return;

    const userFavoriteWorkData = data.users[0].user_to_works.map((item) => {
      if (item.favorite) {
        return item.work_id;
      }
    });
    setHasFavoriteIdArray(userFavoriteWorkData);
  }, [data, worksData]);

  return (
    <Div>
      <Filter defaultFilters={skills} selectedSkillIds={selectedSkillIds} worksLength={worksData?.works.length} />
      <Wrapper>
        {worksData
          ? worksData?.works.map((item, idx) => {
              const isFavorite = data?.users[0].user_to_works.some(({ favorite, work_id }) => {
                if (favorite) {
                  return work_id === item.id;
                }
              });

              return (
                <Card key={idx} item={item} hasFavorite={isFavorite} userToWorksData={data?.users[0].user_to_works} />
              );
            })
          : [...Array(5)].map((_, idx) => {
              return <Skeleton key={idx} variant="rectangular" height={400} sx={{ borderRadius: 2 }} />;
            })}
      </Wrapper>
      <PaginationWrapper>
        <Pagination count={1} variant="outlined" shape="rounded" size="large" />
      </PaginationWrapper>
      <Modal
        open={!!id}
        title="案件詳細"
        onClose={() => {
          router.back();
        }}
      >
        <Detail
          defaultWorkId={worksData?.works[0].id}
          hasFavoriteIdArray={hasFavoriteIdArray}
          userToWorksData={data?.users[0].user_to_works}
        />
      </Modal>
    </Div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  @media (min-width: ${BREAK_POINT.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Div = styled.div`
  padding: 0px 16px 56px 16px;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;
