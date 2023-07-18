import { css } from "@emotion/css";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Chip } from "@mui/material";
import { Filter } from "@/components/works/filter";
import { LeftNavig } from "@/components/works/left-navig";
import { initializeApollo } from "@/lib/apollo/client";
import type { GetWorkQuery } from "@/lib/graphql/graphql";
import { GetWorkDocument } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

export const WORKS_Z_INDEX = {
  FILTER: 10,
};

export default function Works({ data }: { data: GetWorkQuery }) {
  const work = data.work[0];

  return (
    <Wrapper>
      <NavigContainer>
        <Navig>
          <LeftNavig />
        </Navig>
      </NavigContainer>
      <KeyWordContainer>
        <KeyWordFixed>
          <Filter />
        </KeyWordFixed>
        <WorksContainer>
          <Column>
            <Card>
              <Title>
                <div>{work.title}</div>
                <FavoriteIcon>
                  <FavoriteBorderIcon fontSize="large" />
                </FavoriteIcon>
              </Title>
              <MonthlyPrice>
                <Icon>
                  <MonetizationOnIcon fontSize="small" />
                </Icon>
                <Strong>{work.minMonthlyPrice}</Strong>~<Strong>{work.maxMonthlyPrice}</Strong>
                <Span>万円/月額 (想定年収: 2400万円)</Span>
              </MonthlyPrice>
              <FlexContainer>
                <Icon>
                  <ReportIcon />
                </Icon>
                <div>{work.contractType}</div>
              </FlexContainer>
              <FlexContainer>
                <Icon>
                  <LocationOnIcon />
                </Icon>
                <div>{work.location}</div>
              </FlexContainer>
              <FlexContainer>
                {work.developmentLanguages.map((value, idx) => {
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
                大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝 ・計画書作成
                ・進捗管理、報告資料作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝
                ・計画書作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝 ・計画書作成...
              </FlexContainer>
            </Card>
            <Card>
              <Title>
                <div>{work.title}</div>
                <FavoriteIcon>
                  <FavoriteBorderIcon fontSize="large" />
                </FavoriteIcon>
              </Title>
              <MonthlyPrice>
                <Icon>
                  <MonetizationOnIcon fontSize="small" />
                </Icon>
                <Strong>{work.minMonthlyPrice}</Strong>~<Strong>{work.maxMonthlyPrice}</Strong>
                <Span>万円/月額 (想定年収: 2400万円)</Span>
              </MonthlyPrice>
              <FlexContainer>
                <Icon>
                  <ReportIcon />
                </Icon>
                <div>{work.contractType}</div>
              </FlexContainer>
              <FlexContainer>
                <Icon>
                  <LocationOnIcon />
                </Icon>
                <div>{work.location}</div>
              </FlexContainer>
              <FlexContainer>
                {work.developmentLanguages.map((value, idx) => {
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
                大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝 ・計画書作成
                ・進捗管理、報告資料作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝
                ・計画書作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝 ・計画書作成...
              </FlexContainer>
            </Card>
            <Card>
              <Title>
                <div>{work.title}</div>
                <FavoriteIcon>
                  <FavoriteBorderIcon fontSize="large" />
                </FavoriteIcon>
              </Title>
              <MonthlyPrice>
                <Icon>
                  <MonetizationOnIcon fontSize="small" />
                </Icon>
                <Strong>{work.minMonthlyPrice}</Strong>~<Strong>{work.maxMonthlyPrice}</Strong>
                <Span>万円/月額 (想定年収: 2400万円)</Span>
              </MonthlyPrice>
              <FlexContainer>
                <Icon>
                  <ReportIcon />
                </Icon>
                <div>{work.contractType}</div>
              </FlexContainer>
              <FlexContainer>
                <Icon>
                  <LocationOnIcon />
                </Icon>
                <div>{work.location}</div>
              </FlexContainer>
              <FlexContainer>
                {work.developmentLanguages.map((value, idx) => {
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
                大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝 ・計画書作成
                ・進捗管理、報告資料作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝
                ・計画書作成大規模コンシューマー向けWEBシステム開発におけるクライアントの開発管理に携わって頂きます。
                ・社内外との折衝 ・計画書作成...
              </FlexContainer>
            </Card>
          </Column>
          <div
            className={css`
              width: 100%;
              max-width: calc(1320px - 160px - 400px);
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
  const { data } = await initializeApollo().query({
    query: GetWorkDocument,
  });
  return {
    props: { data },
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
  width: 160px;
`;

const NavigContainer = styled.div`
  min-width: 160px;
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
  width: calc(100% - 160px);
  background-color: ${COLOR.WHITE.code};
  max-width: calc(1320px - 160px);
`;

const WorksContainer = styled.div`
  position: sticky;
  display: flex;
  top: 214px;
  width: calc(100% - 160px);
  max-width: calc(1320px - 160px);
`;

const DetailContainer = styled.div`
  padding: 16px;
  position: fixed;
`;

const Strong = styled.div`
  color: ${COLOR.RED.code};
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
