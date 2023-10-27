import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "@/components/common/modal";
import { Card } from "@/components/user/common/card/md";
import { Detail } from "@/components/user/common/detail/md";
import { BREAK_POINT } from "@/constants";
import { GetAppliedWorksDocument } from "@/lib/graphql/graphql";
import type { GetUserToFavoritedWorksQuery, GetAppliedQuery } from "@/lib/graphql/graphql";

type AppliedListProps = {
  worksData: GetAppliedQuery | undefined;
  favoriteData: GetUserToFavoritedWorksQuery["users_by_pk"] | undefined;
};

function AppliedMd({ worksData, favoriteData }: AppliedListProps) {
  const router = useRouter();
  const id = Number(router.query["work-id"]);
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<(number | undefined)[]>([]);
  const [hasAppliedIdArray, setHasAppliedIdArray] = useState<(number | undefined)[]>([]);
  const { user } = useUser();
  const { data: appliedData } = useQuery(GetAppliedWorksDocument, { variables: { id: user?.sub } });

  useEffect(() => {
    if (!favoriteData || !worksData || !appliedData) return;

    const userFavoriteWorkData = favoriteData.userToFavoritedWorks.map((item) => {
      return item.workId;
    });
    setHasFavoriteIdArray(userFavoriteWorkData);

    const userAppliedWorkData = appliedData.users[0].userToApplyWorks.map((item) => {
      return item.workId;
    });
    setHasAppliedIdArray(userAppliedWorkData);
  }, [favoriteData, worksData, appliedData]);

  useEffect(() => {
    // ページをリロード時に指定のURLに遷移させる
    const isReloaded = performance.navigation.type === 1;

    if (isReloaded) {
      const currentUrl = router.asPath;

      const targetURL = "/user/apply";
      if (currentUrl !== targetURL) {
        router.push("/user/apply");
      }
    }
  }, []);

  return (
    <Div>
      <Wrapper>
        {worksData
          ? worksData?.users[0].userToApplyWorks.map(({ work }, idx) => {
              if (!work) return;
              const isFavorite = favoriteData?.userToFavoritedWorks.some(({ workId }) => {
                return workId === work.id;
              });

              return <Card key={idx} item={work} hasFavorite={isFavorite} userToFavoriteWorksData={favoriteData} />;
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
          defaultWorkId={worksData?.users[0].userToApplyWorks[0].workId}
          hasFavoriteIdArray={hasFavoriteIdArray}
          userToFavoriteWorksData={favoriteData}
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
  height: calc(100dvh - 160px);
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;

export default AppliedMd;
