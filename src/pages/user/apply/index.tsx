import { CustomCard } from "@/components/user/card";
import { Detail } from "@/components/user/detail";
import { Pagination, Skeleton } from "@mui/material";
import styled from "@emotion/styled";
import { GetFavoriteQueryDocument } from "@/lib/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";

function Apply() {
  const { user } = useUser();
  const { data: worksData } = useQuery(GetFavoriteQueryDocument, {
    variables: {
      id: user?.sub,
    },
  });
  return (
    <WorksContainer>
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
      {/* // TODO 変える */}
      <DetailWrapper>{<Detail defaultWorkId={worksData?.users[0]?.works[0].work.id} />}</DetailWrapper>
    </WorksContainer>
  );
}

const WrapperSkeleton = styled.div`
  border: 1px solid rgb(224, 224, 224);
  padding: 16px;
  width: 480px;
  :not(:first-of-type) {
    margin-top: 16px;
  }
  max-width: 480px;
  background-color: white;
  height: 400px;
  border-radius: 8px;
`;

const CustomSkeleton = styled(Skeleton)`
  border-radius: 8px;
`;

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-evenly;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;

const DetailWrapper = styled.div`
  width: 100%;
  max-width: calc(1320px - 200px - 400px);
`;

export default Apply;
