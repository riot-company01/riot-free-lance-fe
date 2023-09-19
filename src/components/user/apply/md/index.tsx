import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/common/modal";
import { NoItem } from "@/components/user/components/no-item";
import { Card } from "@/components/user/common/card/md";
import { Detail } from "@/components/user/common/detail/md";
import { BREAK_POINT } from "@/constants";

import type { GetAppliedQuery } from "@/lib/graphql/graphql";

type Props = {
  allAppliedWorksData: GetAppliedQuery | undefined;
};

function AppliedMd({ allAppliedWorksData }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<number[]>([]);

  useEffect(() => {
    if (!allAppliedWorksData) return;

    const userFavoriteWorkData = allAppliedWorksData.users[0].user_to_works.map((item) => item.work_id);
    setHasFavoriteIdArray(userFavoriteWorkData);
  }, [allAppliedWorksData]);

  return (
    <>
      {allAppliedWorksData?.users[0].user_to_works.length !== 0 ? (
        <Div>
          <Wrapper>
            {allAppliedWorksData
              ? allAppliedWorksData?.users[0].user_to_works.map(({ work }, idx) => {
                  const isFavorite = allAppliedWorksData?.users[0].user_to_works.some(({ work_id }) => {
                    return work.id === work_id;
                  });

                  return <Card key={idx} item={work} hasFavorite={isFavorite} />;
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
            <Detail defaultWorkId={id} hasFavoriteIdArray={hasFavoriteIdArray} />
          </Modal>
        </Div>
      ) : (
        <NoItem pageTitle="apply" />
      )}
      );
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  margin-top: 40px;
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

export default AppliedMd;
