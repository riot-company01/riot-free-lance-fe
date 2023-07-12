import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Filter } from "@/components/works/filter";
import { LeftNavig } from "@/components/works/left-navig";
import { initializeApollo } from "@/lib/apollo/client";
import type { GetWorkQuery } from "@/lib/graphql/graphql";
import { GetWorkDocument } from "@/lib/graphql/graphql";

export default function Works({ data }: { data: GetWorkQuery }) {
  const work = data.work[0];
  console.log(work);
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
          <Card>
            <Title>{work.title}</Title>
            <MonthlyPrice>
              {work.minMonthlyPrice} ~ {work.maxMonthlyPrice}
            </MonthlyPrice>
            <div>{work.contractType}</div>
            <div>{work.location}</div>
            <div>
              {work.developmentLanguages.map((value, idx) => {
                return <div key={idx}>{value.skill?.name}</div>;
              })}
            </div>
          </Card>
          <div
            className={css`
              width: 100%;
              max-width: calc(1320px - 160px - 400px);
              border: 1px solid rgb(224, 224, 224);
            `}
          >
            <DetailContainer>bbb</DetailContainer>
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
  max-width: 400px;
  height: 400px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const MonthlyPrice = styled.div``;

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
  height: 100dvh;
  width: 160px;
  position: fixed;
  overflow: auto;
`;

const NavigContainer = styled.div`
  min-width: 160px;
  height: 80dvh;
`;

const KeyWordContainer = styled.div`
  display: flex;
`;

const KeyWordFixed = styled.div`
  height: 136px;
  position: fixed;
  padding: 16px 0;
  width: calc(100% - 160px);
  max-width: calc(1320px - 160px);
`;

const WorksContainer = styled.div`
  height: 2000px;
  position: absolute;
  display: flex;
  top: 214px;
  width: calc(100% - 160px);
  max-width: calc(1320px - 160px);
`;

const DetailContainer = styled.div`
  padding: 16px;
  height: 80dvh;

  position: fixed;
`;
