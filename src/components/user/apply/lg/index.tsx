import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/user/common/card/lg";
import { Detail } from "@/components/user/common/detail/lg";

import { GetAppliedQuery, GetAppliedWorksDocument, GetFavoriteWorksQuery } from "@/lib/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";

type AppliedListProps = {
  worksData: GetAppliedQuery | undefined;
  favoriteData: GetFavoriteWorksQuery | undefined;
};

function AppliedLg({ worksData, favoriteData }: AppliedListProps) {
  const router = useRouter();
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

      const targetURL = "/user/apply";
      if (currentUrl !== targetURL) {
        router.push("/user/apply");
      }
    }
  }, []);

  return (
    <WorksContainer>
      <>
        <Column>
          {worksData
            ? worksData?.users[0].user_to_works.map(({ work }, idx) => {
                const isFavorite = favoriteData?.users[0].user_to_works.some(({ favorite, work_id }) => {
                  if (favorite) {
                    return work_id === work.id;
                  }
                });
                return (
                  <CustomCard
                    key={idx}
                    item={work}
                    hasFavorite={isFavorite}
                    userToFavoriteWorksData={favoriteData?.users[0].user_to_works}
                  />
                );
              })
            : [...Array(5)].map((_, idx) => {
                return (
                  <WrapperSkeleton key={idx}>
                    <CustomSkeleton key={idx} variant="rectangular" height={"100%"} />
                  </WrapperSkeleton>
                );
              })}
          <PaginationWrapper>
            <Pagination count={1} variant="outlined" shape="rounded" size="large" />
          </PaginationWrapper>
        </Column>

        <DetailWrapper>
          <Detail
            defaultWorkId={worksData?.users[0].user_to_works[0].work.id}
            hasFavoriteIdArray={hasFavoriteIdArray}
            userToFavoriteWorksData={favoriteData?.users[0].user_to_works}
            hasAppliedIdArray={hasAppliedIdArray}
          />
        </DetailWrapper>
      </>
    </WorksContainer>
  );
}

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1170px;
  margin-top: 40px;
`;

const WrapperSkeleton = styled.div`
  border: 1px solid rgb(224, 224, 224);
  width: 480px;
  :not(:first-of-type) {
    margin-top: 16px;
  }
  max-width: 480px;
  background-color: white;
  height: 428px;
  border-radius: 8px;
`;

const CustomSkeleton = styled(Skeleton)`
  border-radius: 8px;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;

const DetailWrapper = styled.div`
  width: 100%;
  max-width: calc(1320px - 200px - 400px);
`;

export default AppliedLg;
