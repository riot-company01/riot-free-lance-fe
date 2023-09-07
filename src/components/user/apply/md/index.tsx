import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/common/modal";
import { NoItem } from "@/components/user/components/no-item";
import { Card } from "@/components/user/favorite/md/card";
import { Detail } from "@/components/user/favorite/md/detail";
import { BREAK_POINT } from "@/constants";
import { GetAppliedWorksQuery } from "@/lib/graphql/graphql";
import type { GetAppliedQuery } from "@/lib/graphql/graphql";

type Props = {
  worksData: GetAppliedQuery | undefined;
  data: GetAppliedWorksQuery | undefined;
};

function AppliedMd({ worksData, data }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<number[]>([]);

  useEffect(() => {
    if (!data || !worksData) return;

    const userFavoriteWorkData = data.users[0].works.map((item) => item.work_id);
    setHasFavoriteIdArray(userFavoriteWorkData);
  }, [data, worksData]);

  return (
    <>
      {worksData?.users[0].works.length !== 0 ? (
        <Div>
          <Wrapper>
            {worksData
              ? worksData?.users[0].works.map(({ work }, idx) => {
                  const isFavorite = data?.users[0].works.some(({ work_id }) => {
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
