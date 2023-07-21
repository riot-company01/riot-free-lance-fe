import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Chip } from "@mui/material";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo({});

  const selectedSkillIds = (ctx.query["skill-ids"] as string | undefined)?.split(",") || [];

  await client.query({
    query: GetWorksDocument,
    variables: {
      where: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return languages(skillId);
          }),
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
        ],
      },
      worksWhere: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return { work: languages(skillId) };
          }),
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

export default function Works() {
  const router = useRouter();
  const [workListWrapperHeight, setworkListWrapperHeight] = useState<number | undefined>(0);
  const workListWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === workListWrapperRef.current) {
          setworkListWrapperHeight(entry.target.clientHeight);
        }
      }
    });

    if (workListWrapperRef.current) {
      observer.observe(workListWrapperRef.current);
    }

    return () => {
      if (workListWrapperRef.current) {
        observer.unobserve(workListWrapperRef.current);
      }
    };
  }, [workListWrapperRef]);

  const selectedSkillIds = (router.query["skill-ids"] as string | undefined)?.split(",") || [];

  const { data: works } = useQuery(GetWorksDocument, {
    variables: {
      where: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return languages(skillId);
          }),
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
        ],
      },
      worksWhere: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return { work: languages(skillId) };
          }),
        ],
      },
    },
  });

  return (
    <Wrapper>
      <NavigContainer>
        <Navig>
          <LeftNavig defaultFilters={skills?.skills} selectedSkillIds={selectedSkillIds} />
        </Navig>
      </NavigContainer>
      <KeyWordContainer>
        <KeyWordFixed>
          <Filter
            defaultFilters={skills?.skills}
            selectedSkillIds={selectedSkillIds}
            worksLength={works?.work.length}
          />
        </KeyWordFixed>
        <WorksContainer>
          <Column ref={workListWrapperRef}>
            {works?.work.map((item, idx) => {
              return (
                <Card
                  key={idx}
                  onClick={() => {
                    router.push(
                      {
                        query: {
                          ...router.query,
                          "work-id": item.id,
                        },
                      },
                      undefined,
                      { scroll: false }
                    );
                  }}
                >
                  <Title>
                    <div>{item.title}</div>
                    {/* <FavoriteIcon>
                      <FavoriteBorderIcon fontSize="large" />
                    </FavoriteIcon> */}
                  </Title>
                  <MonthlyPrice>
                    <Icon>
                      <MonetizationOnIcon fontSize="small" />
                    </Icon>
                    {(() => {
                      if (item.minMonthlyPrice && item.maxMonthlyPrice) {
                        return (
                          <>
                            <Strong>{item.minMonthlyPrice}</Strong>~<Strong>{item.maxMonthlyPrice}</Strong>
                            <Span>
                              万円/月額 (想定年収: {item.minMonthlyPrice * 12}~{item.maxMonthlyPrice * 12}万円)
                            </Span>
                          </>
                        );
                      } else if (item.minMonthlyPrice || item.maxMonthlyPrice) {
                        return (
                          <>
                            <Strong>{item.minMonthlyPrice || item.maxMonthlyPrice}</Strong>
                            <Span>
                              万円/月額 (想定年収: {((item.minMonthlyPrice || item.maxMonthlyPrice) as number) * 12}
                              万円)
                            </Span>
                          </>
                        );
                      } else {
                        return <Span>要相談</Span>;
                      }
                    })()}
                  </MonthlyPrice>
                  <FlexContainer>
                    <Icon>
                      <ReportIcon />
                    </Icon>
                    <div>{item.contractType}</div>
                  </FlexContainer>
                  <FlexContainer>
                    <Icon>
                      <LocationOnIcon />
                    </Icon>
                    <div>{item.location}</div>
                  </FlexContainer>
                  <FlexContainerLabel>
                    {item.languages.map((value, idx) => {
                      return (
                        <Chip
                          key={idx}
                          label={value.skill?.name}
                          sx={{
                            borderRadius: 0,
                            marginRight: "4px",
                          }}
                        />
                      );
                    })}
                  </FlexContainerLabel>
                  <FlexContainer>
                    大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                    ・社内外との折衝 ・計画書作成
                    ・進捗管理、報告資料作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                    ・社内外との折衝
                    ・計画書作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                    ・社内外との折衝 ・計画書作成...
                  </FlexContainer>
                </Card>
              );
            })}
          </Column>
          <DetailWrapper>
            <Detail defaultWorkId={works?.work[0].id} workListWrapperHeight={workListWrapperHeight} />
          </DetailWrapper>
        </WorksContainer>
      </KeyWordContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
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

const Title = styled.div`
  font-weight: bold;
  display: flex;
`;

const MonthlyPrice = styled.div`
  font-size: 20px;
  padding-top: 8px;
  display: flex;
  align-items: center;
`;

const DetailWrapper = styled.div`
  width: 47%;
  max-width: calc(1320px - 180px - 400px);
  margin-left: 32px;
`;

const Navig = styled.div`
  padding: 16px;
  width: 180px;
`;

const NavigContainer = styled.div`
  min-width: 180px;
  position: sticky;
  top: 78px;
  overflow: auto;
  height: calc(100dvh - 78px);
`;

const KeyWordContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

const KeyWordFixed = styled.div`
  width: 100%;
  position: sticky;
  top: 78px;
  padding: 16px 0;
  z-index: ${WORKS_Z_INDEX.FILTER};
  width: calc(100% - 180px);
  background-color: #f5f5f5;
  max-width: calc(1320px - 180px);
`;

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  width: calc(100% - 180px);
  max-width: calc(1320px - 180px);
`;

const Strong = styled.div`
  color: #f86986;
  font-family: "HelveticaNeue-CondensedBold", Helvetica, Arial, sans-serif;
`;

const Span = styled.div`
  font-size: 12px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  svg {
    font-size: 16px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 14px;
`;

const FlexContainerLabel = styled(FlexContainer)`
  overflow: auto;
`;

// const FavoriteIcon = styled.div`
//   font-weight: normal;
// `;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
