import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import { CustomCard } from "@/components/works/lg/card";
import { Detail } from "@/components/works/lg/detail";
import { Filter } from "@/components/works/lg/filter";
import { LeftNavig } from "@/components/works/lg/left-navig";
import { LG_GLOBAL_NAVIGATION } from "@/constants";
import { GetUserToWorksDocument } from "@/lib/graphql/graphql";
import type { GetSkillsQuery, GetWorksQuery } from "@/lib/graphql/graphql";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
};

export function WorksLg({ skills, selectedSkillIds, worksData }: Props) {
  const [hasFavoriteIdArray, setHasFavoriteIdArray] = useState<(number | undefined)[]>([]);
  const [hasAppliedIdArray, setHasAppliedIdArray] = useState<(number | undefined)[]>([]);
  const { user } = useUser();
  const { data: userToWorksData } = useQuery(GetUserToWorksDocument, { variables: { id: user?.sub } });

  useEffect(() => {
    if (!worksData || !userToWorksData) return;

    const userFavoriteWorkData = userToWorksData.users[0].user_to_works.map((item) => {
      if (item.favorite) {
        return item.work_id;
      }
    });
    setHasFavoriteIdArray(userFavoriteWorkData);

    const userAppliedWorkData = userToWorksData.users[0].user_to_works.map((item) => {
      if (item.application) {
        return item.work_id;
      }
    });
    setHasAppliedIdArray(userAppliedWorkData);
  }, [worksData, userToWorksData]);

  return (
    <Wrapper>
      <NavigContainer>
        <Navig>
          {skills?.length !== 0 ? (
            <LeftNavig defaultFilters={skills} selectedSkillIds={selectedSkillIds} />
          ) : (
            <CustomSkeleton variant="rectangular" height={"100vh"} />
          )}
        </Navig>
      </NavigContainer>
      <KeyWordContainer>
        <KeyWordFixed>
          <Filter defaultFilters={skills} selectedSkillIds={selectedSkillIds} worksLength={worksData?.works.length} />
        </KeyWordFixed>
        <WorksContainer>
          <Column>
            {worksData
              ? worksData?.works.map((item, idx) => {
                  const isFavorite = userToWorksData?.users[0].user_to_works.some(({ favorite, work_id }) => {
                    if (favorite) {
                      return work_id === item.id;
                    }
                  });
                  return (
                    <CustomCard
                      key={idx}
                      item={item}
                      hasFavorite={isFavorite}
                      userToWorksData={userToWorksData?.users[0].user_to_works}
                    />
                  );
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
              defaultWorkId={worksData?.works[0].id}
              hasFavoriteIdArray={hasFavoriteIdArray}
              userToFavoriteWorksData={userToWorksData?.users[0].user_to_works}
              hasAppliedIdArray={hasAppliedIdArray}
            />
          </DetailWrapper>
        </WorksContainer>
      </KeyWordContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 160px;
`;

const WrapperSkeleton = styled.div`
  border: 1px solid rgb(224, 224, 224);
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

const DetailWrapper = styled.div`
  width: 100%;
  max-width: calc(1320px - 200px - 400px);
  margin: 0 32px;
`;

const Navig = styled.div`
  padding: 16px;
`;

const NavigContainer = styled.div`
  min-width: 200px;
  position: sticky;
  top: ${LG_GLOBAL_NAVIGATION.HEADER}px;
  overflow: auto;
  height: calc(100dvh - ${LG_GLOBAL_NAVIGATION.HEADER}px);
`;

const KeyWordContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const KeyWordFixed = styled.div`
  width: 100%;
  position: sticky;
  top: ${LG_GLOBAL_NAVIGATION.HEADER}px;
  padding: 16px 0;
  z-index: ${WORKS_Z_INDEX.FILTER};

  background-color: #f5f5f5;
  max-width: calc(1320px - 200px);
`;

const WorksContainer = styled.div`
  position: sticky;
  display: flex;

  max-width: calc(1320px - 200px);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;
