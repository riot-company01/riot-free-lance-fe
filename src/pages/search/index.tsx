import styled from "@emotion/styled";
import { initializeApollo } from "@/lib/apollo/client";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
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
  const lang = data.skills.filter((value) => value.type == "LANG");
  const library = data.skills.filter((value) => value.type == "FW/LIBRARY");

  return (
    <Wrapper>
      <Head1>ジャンル一覧</Head1>
      <FlexContainer>
        {category.map((value, idx) => {
          return <FlexItem key={idx}>{value}</FlexItem>;
        })}
      </FlexContainer>
      <Head2>開発言語</Head2>
      <Grid>
        {lang.map((value, idx) => {
          return <KeywordLabel key={idx}>{value.name}</KeywordLabel>;
        })}
      </Grid>
      <Head2>FW/Library</Head2>
      <Grid>
        {library.map((value, idx) => {
          return <KeywordLabel key={idx}>{value.name}</KeywordLabel>;
        })}
      </Grid>
    </Wrapper>
  );
}

export default Search;

export async function getServerSideProps() {
  const { data } = await initializeApollo().query({
    query: GetSkillsDocument,
  });
  return {
    props: { data },
  };
}

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
  padding-top: 32px;
  font-size: 20px;
`;

const KeywordLabel = styled.div`
  padding: 9px 16px;
  display: flex;
  border: 1px solid rgb(224, 224, 224);
  font-size: 14px;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  padding-top: 8px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
