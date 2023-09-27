import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/common/modal";
import { Card } from "@/components/user/common/card/md";
import { Detail } from "@/components/user/common/detail/md";
import { BREAK_POINT } from "@/constants";
import { GetAppliedWorksDocument, GetFavoriteWorksQuery } from "@/lib/graphql/graphql";
import type { GetFavoriedQuery } from "@/lib/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";

type Props = {
  worksData: GetFavoriedQuery | undefined;
  favoriteData: GetFavoriteWorksQuery | undefined;
};

export function FavoriteMd({ worksData, favoriteData }: Props) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<(number | undefined)[]>([]);
  const [hasAppliedIdArray, setHasAppliedIdArray] = useState<(number | undefined)[]>([]);
  const { user } = useUser();
  const { data: appliedData } = useQuery(GetAppliedWorksDocument, { variables: { id: user?.sub } });

  useEffect(() => {
    if (!favoriteData || !worksData || !appliedData) return;

    const userFavoriteWorkData = favoriteData.users[0].user_to_works.map((item) => {
      if (item.favorite) {
        return item.work_id;
      }
    });
    setHasFavoriteIdArray(userFavoriteWorkData);

    const userAppliedWorkData = appliedData.users[0].user_to_works.map((item) => {
      if (item.application) {
        return item.work_id;
      }
    });
    setHasAppliedIdArray(userAppliedWorkData);
  }, [favoriteData, worksData, appliedData]);

  useEffect(() => {
    // ページをリロード時に指定のURLに遷移させる
    const isReloaded = performance.navigation.type === 1;

    if (isReloaded) {
      const currentUrl = router.asPath;

      const targetURL = "/user/favorite";
      if (currentUrl !== targetURL) {
        router.push("/user/favorite");
      }
    }
  }, []);

  return (
    <Div>
      <Wrapper>
        {worksData
          ? worksData?.users[0].user_to_works.map(({ work }, idx) => {
              const isFavorite = favoriteData?.users[0].user_to_works.some(({ favorite, work_id }) => {
                if (favorite) {
                  return work_id === work.id;
                }
              });

              return (
                <Card
                  key={idx}
                  item={work}
                  hasFavorite={isFavorite}
                  userToFavoriteWorksData={favoriteData?.users[0].user_to_works}
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
          userToFavoriteWorksData={favoriteData?.users[0].user_to_works}
          hasAppliedIdArray={hasAppliedIdArray}
        />
      </Modal>
    </Div>
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
