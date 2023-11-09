import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { Detail as _Detail } from "@/components/shared/detail/lg";
import { Item } from "@/components/shared/item";
import { NoItem } from "@/components/user/shared/no-item";
import { useAuth } from "@/hooks/use-auth";
import { GetUserToWorksDocument } from "@/lib/graphql/graphql";

export function FavoriteLg() {
  const router = useRouter();
  const { user } = useAuth();
  const { data: userData } = useQuery(GetUserToWorksDocument, {
    skip: !user?.sub,
    variables: {
      id: user?.sub as string,
    },
  });

  const id = Number(router.query["work-id"]) || userData?.users_by_pk?.userToFavoritedWorks[0]?.workId;
  const focusItemIsFavorite = userData?.users_by_pk?.userToFavoritedWorks.some((i) => i.workId === id);
  const focusItemIsApplied = userData?.users_by_pk?.userToApplyWorks.some((i) => i.workId === id);

  if (userData?.users_by_pk?.userToFavoritedWorks.length === 0) return <NoItem pageTitle="favorite" />;

  return (
    <Wrapper>
      <WorksContainer>
        <Column>
          {userData && userData.users_by_pk && userData.users_by_pk.userToFavoritedWorks
            ? userData.users_by_pk.userToFavoritedWorks.map((item, idx) => {
                if (!item.work) return;
                const isFavorite = userData?.users_by_pk?.userToFavoritedWorks.some((i) => i.workId === item.workId);
                return <Item key={idx} item={item.work} isFavorite={!!isFavorite} userId={userData?.users_by_pk?.id} />;
              })
            : [...Array(5)].map((_, idx) => {
                return (
                  <WrapperSkeleton key={idx}>
                    <CustomSkeleton
                      key={idx}
                      variant="rectangular"
                      height={400}
                      sx={{
                        borderRadius: 2,
                      }}
                    />
                  </WrapperSkeleton>
                );
              })}
          <PaginationWrapper>
            <Pagination count={1} variant="outlined" shape="rounded" size="large" />
          </PaginationWrapper>
        </Column>

        <DetailWrapper>
          <Detail
            page="favorite"
            id={id}
            isFavorite={!!focusItemIsFavorite}
            isApplied={!!focusItemIsApplied}
            userId={userData?.users_by_pk?.id}
          />
        </DetailWrapper>
      </WorksContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const WrapperSkeleton = styled.div`
  width: 480px;
  margin-left: 2px;
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

const DetailWrapper = styled.div`
  width: 100%;
  max-width: calc(1320px - 400px);
  margin: 0 32px;
`;

const Detail = styled(_Detail)`
  & > div {
    top: 0px;
  }
`;

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  max-width: 1320px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;
