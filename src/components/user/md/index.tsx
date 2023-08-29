import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { CustomCard } from "@/components/user/lg/card";
import { Detail } from "@/components/user/lg/detail";
import { NoItem } from "@/components/user/lg/no-item";
import type { GetFavoriedQuery } from "@/lib/graphql/graphql";

type FavoriteListProps = {
  worksData: GetFavoriedQuery | undefined;
};

function FavoriteLg({ worksData }: FavoriteListProps) {
  return (
    <WorksContainer>
      aaaaaaa
      {worksData?.users[0].works.length !== 0 ? (
        <>
          <Column>
            {worksData
              ? worksData?.users[0].works.map(({ work }, idx) => {
                  return <CustomCard key={idx} item={work} />;
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

          <DetailWrapper>{<Detail defaultWorkId={worksData?.users[0].works[0].work.id} />}</DetailWrapper>
        </>
      ) : (
        <NoItem title="favorite" />
      )}
    </WorksContainer>
  );
}

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-evenly;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperSkeleton = styled.div`
  border: 1px solid rgb(224, 224, 224);
  padding: 16px;
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

export default FavoriteLg;
