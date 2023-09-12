import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/user/apply/lg/card";
import { Detail } from "@/components/user/apply/lg/detail";
import { GetAppliedWorksQuery } from "@/lib/graphql/graphql";
import type { GetAppliedQuery } from "@/lib/graphql/graphql";

type AppliedListProps = {
  worksData: GetAppliedQuery | undefined;
  data: GetAppliedWorksQuery | undefined;
};

function AppliedLg({ worksData, data }: AppliedListProps) {
  const router = useRouter();
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
                const isFavorite = data?.users[0].user_to_works.some(({ favorite, work_id }) => {
                  if (favorite) {
                    return work_id === work.id;
                  }
                });
                return (
                  <CustomCard
                    key={idx}
                    item={work}
                    hasFavorite={isFavorite}
                    userToWorksData={data?.users[0].user_to_works}
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
            userToWorksData={data?.users[0].user_to_works}
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
