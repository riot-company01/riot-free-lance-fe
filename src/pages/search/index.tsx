import styled from "@emotion/styled";
import { initializeApollo } from "@/lib/apollo/client";
import type { GetSkillsQuery, GetSkillsQueryVariables } from "@/lib/graphql/graphql";
import { GetSkillsDocument } from "@/lib/graphql/graphql";

const category = [
  "おすすめ",
  "開発言語",
  "フレームワーク",
  "インフラ系",
  "デザイン系",
  "その他",
  "勤務地",
  "職種",
  "業界",
  "単価",
];

function Search({ data }: { data: GetSkillsQuery }) {
  console.log(data);
  return (
    <Wrapper>
      <Head1>ジャンル一覧</Head1>
      <FlexContainer>
        {category.map((value, idx) => {
          return <FlexItem key={idx}>{value}</FlexItem>;
        })}
      </FlexContainer>

      {/* TODO APIのデータに差し替え */}
      {category.map((i, idx) => {
        return (
          <Head2 key={idx}>
            {/* {i}
            <Grid>
              {mock.map((i) => {
                return (
                  <>
                    {i.words.map((v) => {
                      return <KeywordLabel>{v}</KeywordLabel>;
                    })}
                  </>
                );
              })}
            </Grid> */}
          </Head2>
        );
      })}
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  padding: 0 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 16px 0px;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

const FlexItem = styled.div`
  padding: 0px 16px;
  :first-of-type {
    padding: 0px;
    padding-right: 16px;
  }
`;

const Head1 = styled.div`
  font-size: 24px;
`;

const Head2 = styled.div`
  font-size: 20px;
`;

// const KeywordLabel = styled.div`
//   padding: 9px 16px;
//   display: flex;
//   border: 1px solid rgb(224, 224, 224);
//   font-size: 14px;
//   align-items: center;
// `;

// const Grid = styled.div`
//   display: grid;
//   padding-top: 8px;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// `;

export async function getServerSideProps() {
  const { data } = await initializeApollo().query<GetSkillsQuery, GetSkillsQueryVariables>({
    query: GetSkillsDocument,
  });
  return {
    props: { data },
  };
}
