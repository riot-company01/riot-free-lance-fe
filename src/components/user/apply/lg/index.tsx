import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { CustomCard } from "@/components/user/favorite/lg/card";
import { Detail } from "@/components/user/favorite/lg/detail";
import { GetAppliedQuery, GetAppliedWorksDocument } from "@/lib/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import { NoItem } from "@/components/user/components/no-item";
import { useRouter } from "next/router";

type AppliedListProps = {
  worksData: GetAppliedQuery | undefined;
};

function AppliedLg({ worksData }: AppliedListProps) {
  const router = useRouter();
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<number[]>([]);
  const { user } = useUser();
  const { data } = useQuery(GetAppliedWorksDocument, { variables: { id: user?.sub } });

  useEffect(() => {
    if (!data || !worksData) return;

    const userFavoriteWorkData = data.users[0].works.map((item) => item.work_id);
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
      {worksData?.users[0].works.length !== 0 && data?.users[0].works.length !== 0 ? (
        <>
          <Column>
            {worksData
              ? worksData?.users[0].works.map(({ work }, idx) => {
                  const isFavorite = data?.users[0].works.some(({ work_id }) => {
                    return work.id === work_id;
                  });
                  return <CustomCard key={idx} item={work} hasFavorite={isFavorite} />;
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
            <Detail defaultWorkId={data?.users[0].works[0].work_id} hasFavoriteIdArray={hasFavoriteIdArray} />
          </DetailWrapper>
        </>
      ) : (
        <NoItem title="apply" />
      )}
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
