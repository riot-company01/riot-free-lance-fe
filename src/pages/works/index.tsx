import { useQuery } from "@apollo/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/works/card";
import { Detail } from "@/components/works/detail";
import { Filter } from "@/components/works/filter";
import { LeftNavig } from "@/components/works/left-navig";
import { NotResult } from "@/components/works/not-result";
import { addApolloState, initializeApollo } from "@/lib/apollo/client";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
import { Order_By, GetSkillsDocument, GetWorksDocument } from "@/lib/graphql/graphql";

export const WORKS_Z_INDEX = {
  FILTER: 10,
};

const languages = (skillId: string) => {
  return { languages: { skill_id: { _eq: Number(skillId) } } };
};

const direction = (keyword: string) => {
  return {
    description: {
      _ilike: `%${keyword}%`,
    },
  };
};

const title = (keyword: string) => {
  return {
    title: {
      _ilike: `%${keyword}%`,
    },
  };
};

export const getServerSideProps = withPageAuthRequired({
  // @ts-ignore
  async getServerSideProps(ctx) {
    const client = initializeApollo({});

    const selectedSkillIds = (ctx.query["skill-ids"] as string | undefined)?.split(",") || [];
    const inputKeyword = (ctx.query["keyword"] as string) || "";

    await client.query({
      query: GetWorksDocument,
      variables: {
        order_by: {
          createAt: Order_By.Desc,
        },
        where: {
          _and: [
            ...selectedSkillIds.map((skillId) => {
              return languages(skillId);
            }),
            { _or: [direction(inputKeyword), title(inputKeyword)] },
          ],
        },
      },
    });

    await client.query({
      query: GetSkillsDocument,
      variables: {
        skillsWhere: {
          works_aggregate: {
            count: { predicate: { _gt: 0 } },
          },
          _and: [
            ...selectedSkillIds.map((skillId) => {
              return { works: { work: languages(skillId) } };
            }),
            {
              // _or: [
              //   {
              //     works: {
              //       work: direction(inputKeyword),
              //     },
              //   },
              //   {
              //     works: {
              //       work: title(inputKeyword),
              //     },
              //   },
              // ],
            },
          ],
        },
        worksWhere: {
          _and: [
            ...selectedSkillIds.map((skillId) => {
              return { work: languages(skillId) };
            }),
            {
              // _or: [
              //   {
              //     work: direction(inputKeyword),
              //   },
              //   {
              //     work: title(inputKeyword),
              //   },
              // ],
            },
          ],
        },
      },
    });

    const documentProps = addApolloState(client, {
      props: {},
    });
    return {
      props: documentProps.props,
    };
  },
});

function Works() {
  const router = useRouter();
  const [keepSkills, setKeepSkills] = useState<GetSkillsQuery["skills"]>([]);
  const selectedSkillIds = (router.query["skill-ids"] as string | undefined)?.split(",") || [];
  const inputKeyword = (router.query["keyword"] as string) || "";
  const sort = (router.query["sort"] as string) || "";

  const order = sort === "new" ? { createAt: Order_By.Desc } : { maxMonthlyPrice: Order_By.Desc };

  const { data: worksData, loading } = useQuery(GetWorksDocument, {
    variables: {
      order_by: {
        ...order,
      },
      where: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return languages(skillId);
          }),
          { _or: [direction(inputKeyword), title(inputKeyword)] },
        ],
      },
    },
  });

  const { data: skillsData } = useQuery(GetSkillsDocument, {
    variables: {
      skillsWhere: {
        works_aggregate: {
          count: { predicate: { _gt: 0 } },
        },
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return { works: { work: languages(skillId) } };
          }),
          {
            _or: [
              {
                works: {
                  work: direction(inputKeyword),
                },
              },
              {
                works: {
                  work: title(inputKeyword),
                },
              },
            ],
          },
        ],
      },
      worksWhere: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return { work: languages(skillId) };
          }),
          {
            _or: [
              {
                work: direction(inputKeyword),
              },
              {
                work: title(inputKeyword),
              },
            ],
          },
        ],
      },
    },
  });

  useEffect(() => {
    if (skillsData?.skills.length === 0) return;
    setKeepSkills(skillsData?.skills || []);
  }, [skillsData]);

  if (!worksData && !loading) {
    return <NotResult keepSkills={keepSkills} selectedSkillIds={selectedSkillIds} inputKeyword={inputKeyword} />;
  }

  return (
    <Wrapper>
      <NavigContainer>
        <Navig>
          {skillsData ? (
            <LeftNavig defaultFilters={skillsData.skills} selectedSkillIds={selectedSkillIds} />
          ) : (
            <CustomSkeleton variant="rectangular" height={"100vh"} />
          )}
        </Navig>
      </NavigContainer>
      <KeyWordContainer>
        <KeyWordFixed>
          <Filter defaultFilters={skillsData?.skills} selectedSkillIds={selectedSkillIds} worksLength={worksData?.works.length} />
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
                      <CustomSkeleton key={idx} variant="rectangular" height={"100%"} />
                    </WrapperSkeleton>
                  );
                })}
            <PaginationWrapper>
              <Pagination count={1} variant="outlined" shape="rounded" size="large" />
            </PaginationWrapper>
          </Column>
          {/* // TODO 変える */}
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

const DetailWrapper = styled.div`
  width: 100%;
  max-width: calc(1320px - 200px - 400px);
  margin-left: 32px;
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

export default Works;
