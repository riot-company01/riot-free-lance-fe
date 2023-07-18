import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Chip } from "@mui/material";
import { useState } from "react";
import { Filter } from "@/components/works/filter";
import { LeftNavig } from "@/components/works/left-navig";
import { addApolloState, initializeApollo } from "@/lib/apollo/client";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
import { GetSkillsDocument, GetWorksDocument } from "@/lib/graphql/graphql";

export const WORKS_Z_INDEX = {
  FILTER: 10,
};

export default function Works() {
  const [selectedValues, setSelectedValue] = useState<GetSkillsQuery["skills"]>([]);
  const { data: works } = useQuery(GetWorksDocument, {
    variables: {
      where: {
        _and: selectedValues.map((value) => {
          return { languages: { skill_id: { _eq: value.id } } };
        }),
      },
    },
  });

  const { data: skills } = useQuery(GetSkillsDocument, {
    variables: {
      skillsWhere: {
        works_aggregate: {
          count: { predicate: { _gt: 0 } },
        },
        _and: selectedValues.map((value) => {
          return { works: { work: { languages: { skill_id: { _eq: value.id } } } } };
        }),
      },
      worksWhere: {
        _and: selectedValues.map((value) => {
          return { work: { languages: { skill_id: { _eq: value.id } } } };
        }),
      },
    },
  });

  const defaultFilters = skills?.skills;

  function onSelectedValue(selectedValue: GetSkillsQuery["skills"][number]) {
    setSelectedValue((prev) => {
      return prev.some((i) => i.name === selectedValue.name) ? prev.filter((i) => i.name !== selectedValue.name) : [...prev, selectedValue];
    });
  }

  return (
    <Wrapper>
      <NavigContainer>
        <Navig>
          <LeftNavig defaultFilters={defaultFilters} onSelectedValue={onSelectedValue} selectedValues={selectedValues} />
        </Navig>
      </NavigContainer>
      <KeyWordContainer>
        <KeyWordFixed>
          <Filter selectedValues={selectedValues} onSelectedValue={onSelectedValue} />
        </KeyWordFixed>
        <WorksContainer>
          <Column>
            {works?.work.map((item, idx) => {
              return (
                <Card key={idx}>
                  <Title>
                    <div>{item.title}</div>
                    <FavoriteIcon>
                      <FavoriteBorderIcon fontSize="large" />
                    </FavoriteIcon>
                  </Title>
                  <MonthlyPrice>
                    <Icon>
                      <MonetizationOnIcon fontSize="small" />
                    </Icon>
                    <Strong>{item.minMonthlyPrice}</Strong>~<Strong>{item.maxMonthlyPrice}</Strong>
                    <Span>万円/月額 (想定年収: 2400万円)</Span>
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
                  <FlexContainer>
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
                  </FlexContainer>
                  <FlexContainer>
                    大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。 ・社内外との折衝 ・計画書作成
                    ・進捗管理、報告資料作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。 ・社内外との折衝
                    ・計画書作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。 ・社内外との折衝
                    ・計画書作成...
                  </FlexContainer>
                </Card>
              );
            })}
          </Column>
          <div
            className={css`
              width: 100%;
              max-width: calc(1320px - 180px - 400px);
              border: 1px solid rgb(224, 224, 224);
              margin-left: 32px;
            `}
          >
            <DetailContainer>村山マークダウンエリア</DetailContainer>
          </div>
        </WorksContainer>
      </KeyWordContainer>
    </Wrapper>
  );
}

export async function getServerSideProps() {
  const client = initializeApollo({});
  await client.query({
    query: GetWorksDocument,
  });

  await client.query({
    query: GetSkillsDocument,
    variables: {
      skillsWhere: {
        works_aggregate: {
          count: { predicate: { _gt: 0 } },
        },
        _and: [],
      },
    },
  });

  const documentProps = addApolloState(client, {
    props: {},
  });
  return {
    props: documentProps.props,
  };
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

// const Detail = styled.div`
//   border: 1px solid rgb(224, 224, 224);
//   padding: 16px;
//   height: 80dvh;
//   right: 0px;
//   width: 720px;
//   position: fixed;
// `;

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
`;

const KeyWordFixed = styled.div`
  height: 136px;
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
  top: 214px;
  width: calc(100% - 180px);
  max-width: calc(1320px - 180px);
`;

const DetailContainer = styled.div`
  padding: 16px;
  position: fixed;
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

const FavoriteIcon = styled.div`
  font-weight: normal;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
