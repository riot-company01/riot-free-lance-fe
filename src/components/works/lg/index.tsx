import { useQuery } from "@apollo/client";
import type { UserProfile } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import { Detail } from "@/components/works/lg/detail";
import { Filter } from "@/components/works/lg/filter";
import { Item } from "@/components/works/lg/item";
import { LeftNavig } from "@/components/works/lg/left-navig";
import { LG_GLOBAL_NAVIGATION } from "@/constants";
import { GetUserToWorksDocument, type GetSkillsQuery, type GetWorksQuery } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
  user?: UserProfile;
};

export function WorksLg({ skills, selectedSkillIds, worksData, user }: Props) {
  const { data: userData } = useQuery(GetUserToWorksDocument, {
    skip: !user?.sub,
    variables: {
      id: user?.sub as string,
    },
  });
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
            {worksData && userData
              ? worksData?.works.map((item, idx) => {
                  const hasBookmark = userData.users_by_pk?.userToWorks.some((i) => i.workId === item.id);
                  return <Item key={idx} item={item} hasBookmark={!!hasBookmark} userId={userData.users_by_pk?.id} />;
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

          <DetailWrapper>{<Detail defaultWorkId={worksData?.works[0].id} />}</DetailWrapper>
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
  background: ${COLOR.WHITE.code};
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
