import styled from "@emotion/styled";

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

function Search() {
  return (
    <Wrapper>
      <Head1>ジャンル一覧</Head1>
      <FlexContainer>
        {category.map((i) => {
          return <FlexItem>{i}</FlexItem>;
        })}
      </FlexContainer>

      {/* TODO APIのデータに差し替え */}
      {category.map((i) => {
        return (
          <Head2>
            {i}
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
            </Grid>
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

const mock = [
  {
    title: "おすすめ",
    words: [
      "JavaScript",
      "PHP",
      "Ruby",
      "Java",
      "Python",
      "Go",
      "Kotlin",
      "Swift",
    ],
  },
  {
    title: "おすすめ",
    words: [
      "JavaScript",
      "PHP",
      "Ruby",
      "Java",
      "Python",
      "Go",
      "Kotlin",
      "Swift",
    ],
  },
  {
    title: "開発言語",
    words: [
      "JavaScript",
      "PHP",
      "Ruby",
      "Java",
      "Python",
      "Go",
      "Kotlin",
      "Swift",
      "Node.js",
    ],
  },
  {
    title: "フレームワーク/ライブラリ",
    words: [
      "Next.js",
      "React.js",
      "Ruby on Rails",
      "NuxtJS",
      "Vue.js",
      "Laravel",
      "Zend Framework",
      "FuelPHP",
    ],
  },
  {
    title: "インフラ系",
    words: [
      "AWS",
      "Linux",
      "Azure",
      "Oracle",
      "GCP",
      "Fargate",
      "Linux",
      "UNIX",
    ],
  },
  {
    title: "おすすめ",
    words: [
      "JavaScript",
      "PHP",
      "Ruby",
      "Java",
      "Python",
      "Go",
      "Kotlin",
      "Swift",
    ],
  },
];
