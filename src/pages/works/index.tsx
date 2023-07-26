import { useQuery } from "@apollo/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Button, Pagination } from "@mui/material";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Card } from "@/components/works/card";
import { Detail } from "@/components/works/detail";
import { Filter } from "@/components/works/filter";
import { LeftNavig } from "@/components/works/left-navig";
import { addApolloState, initializeApollo } from "@/lib/apollo/client";
import { GetSkillsDocument, GetWorksDocument } from "@/lib/graphql/graphql";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo({});

  const selectedSkillIds = (ctx.query["skill-ids"] as string | undefined)?.split(",") || [];
  const inputKeyword = (ctx.query["keyword"] as string) || "";

  await client.query({
    query: GetWorksDocument,
    variables: {
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

  const documentProps = addApolloState(client, {
    props: {},
  });
  return {
    props: documentProps.props,
  };
};

function Works() {
  const router = useRouter();

  const selectedSkillIds = (router.query["skill-ids"] as string | undefined)?.split(",") || [];
  const inputKeyword = (router.query["keyword"] as string) || "";

  const { data: works } = useQuery(GetWorksDocument, {
    variables: {
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

  const { data: skills } = useQuery(GetSkillsDocument, {
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

  if (works?.work.length === 0) {
    return (
      <NotResultWrapper>
        <div>該当する案件がありません。</div>
        <div>絞り込み条件を見直してください。</div>
        <Button
          variant="contained"
          onClick={() => {
            router.push({
              pathname: "works/",
            });
          }}
        >
          絞りみ条件をリセットする
        </Button>
      </NotResultWrapper>
    );
  }

  return (
    <Wrapper>
      <NavigContainer>
        <Navig>
          <LeftNavig defaultFilters={skills?.skills} selectedSkillIds={selectedSkillIds} />
        </Navig>
      </NavigContainer>
      <KeyWordContainer>
        <KeyWordFixed>
          <Filter defaultFilters={skills?.skills} selectedSkillIds={selectedSkillIds} worksLength={works?.work.length} />
        </KeyWordFixed>
        <WorksContainer>
          <Column>
            {works?.work.map((item, idx) => {
              return <Card key={idx} item={item} />;
            })}
            <PaginationWrapper>
              <Pagination count={1} variant="outlined" shape="rounded" size="large" />
            </PaginationWrapper>
          </Column>
          <DetailWrapper>{works?.work[0]?.id && <Detail defaultWorkId={works?.work[0]?.id} />}</DetailWrapper>
        </WorksContainer>
      </KeyWordContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 160px;
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
  width: calc(100% - 200px);
  background-color: #f5f5f5;
  max-width: calc(1320px - 200px);
`;

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  width: calc(100% - 200px);
  max-width: calc(1320px - 200px);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;

const NotResultWrapper = styled.div``;

export default withPageAuthRequired(Works);
