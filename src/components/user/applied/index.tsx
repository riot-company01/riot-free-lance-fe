import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styles from "./styles";

export const Applied = () => {
  const { push } = useRouter();
  const handleSearchProjectButtonClick = () => {
    push("/project/");
  };
  return (
    <Styles.DivAppliedWrapper>
      <Styles.AppliedListHeader>
        <Styles.HeadTitle>応募済み案件一覧</Styles.HeadTitle>
      </Styles.AppliedListHeader>
      <Styles.DivWrapperContent>
        <Styles.DivWrapper>
          <Styles.DivSummary>
            <Styles.HeadSummaryTitle>案件管理</Styles.HeadSummaryTitle>
            <Styles.DivItems>
              <Link href={"/user/favorite"}>お気に入り</Link>
            </Styles.DivItems>
            <Styles.DivItems>
              <Styles.PerApplied>応募済み案件</Styles.PerApplied>
            </Styles.DivItems>
          </Styles.DivSummary>
        </Styles.DivWrapper>
        <Styles.DivProjectList>
          {/* {MOCK_PROJECT_DATA ? (
            MOCK_PROJECT_DATA.map((item) => <ProjectContent key={item.id} item={item} />)
          ) : ( */}
          <Styles.DivNotAppliedContents>
            <Styles.DivNotAppliedItem>
              <Styles.PerNotAppliedItem>まだ応募した案件はありません</Styles.PerNotAppliedItem>
            </Styles.DivNotAppliedItem>

            <Button
              name="searchProjectButton"
              onClick={() => handleSearchProjectButtonClick()}
              style={{ height: "40px", width: "400px" }}
            >
              案件を探す
            </Button>
          </Styles.DivNotAppliedContents>
          {/* )} */}
        </Styles.DivProjectList>
      </Styles.DivWrapperContent>
    </Styles.DivAppliedWrapper>
  );
};
