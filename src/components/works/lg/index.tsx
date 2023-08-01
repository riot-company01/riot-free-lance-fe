import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import { CustomCard } from "@/components/works/lg/card";
import { Detail } from "@/components/works/lg/detail";
import { Filter } from "@/components/works/lg/filter";
import { LeftNavig } from "@/components/works/lg/left-navig";
import type { GetSkillsQuery, GetWorksQuery } from "@/lib/graphql/graphql";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
};

export function WorksLg({ skills, selectedSkillIds, worksData }: Props) {
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
                  return <CustomCard key={idx} item={item} />;
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
  width: 200px;
`;

const NavigContainer = styled.div`
  min-width: 200px;
  position: sticky;
  top: 78px;
  overflow: auto;
  height: calc(100dvh - 78px);
`;

const KeyWordContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const KeyWordFixed = styled.div`
  width: 100%;
  position: sticky;
  top: 78px;
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
