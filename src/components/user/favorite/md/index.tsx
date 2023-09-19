import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/common/modal";
import { NoItem } from "@/components/user/components/no-item";
import { Card } from "@/components/user/common/card/md";
import { Detail } from "@/components/user/common/detail/md";
import { BREAK_POINT } from "@/constants";
import { GetFavoriteWorksQuery } from "@/lib/graphql/graphql";
import type { GetFavoriedQuery } from "@/lib/graphql/graphql";

type Props = {
  worksData: GetFavoriedQuery | undefined;
  data: GetFavoriteWorksQuery | undefined;
};

export function FavoriteMd({ worksData, data }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<(number | undefined)[]>([]);

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
    <>
      {worksData?.users[0].user_to_works.length !== 0 ? (
        <Div>
          <Wrapper>
            {worksData
              ? worksData?.users[0].user_to_works.map(({ work }, idx) => {
                  const isFavorite = data?.users[0].user_to_works.some(({ favorite, work_id }) => {
                    if (favorite) {
                      return work_id === work.id;
                    }
                  });

                  return (
                    <Card
                      key={idx}
                      item={work}
                      hasFavorite={isFavorite}
                      userToWorksData={data?.users[0].user_to_works}
                    />
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
              defaultWorkId={worksData?.users[0].user_to_works[0].work.id}
              hasFavoriteIdArray={hasFavoriteIdArray}
              userToWorksData={data?.users[0].user_to_works}
            />
          </Modal>
        </Div>
      ) : (
        <NoItem pageTitle="favorite" />
      )}
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
