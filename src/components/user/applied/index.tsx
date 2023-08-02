import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styles from "./styles";
// import { MOCK_PROJECT_DATA } from "@/components/user/favorite/const";
// import { ProjectContent } from "@/components/user/common/project-content";

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
              <Link href={"/user/favorite"} passHref>
                <Styles.PerApplied>お気に入り</Styles.PerApplied>
              </Link>
            </Styles.DivItems>
            <Styles.DivItems>
              <p>応募済み案件</p>
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

            <Button variant="contained" onClick={handleSearchProjectButtonClick}>
              案件を探す
            </Button>
          </Styles.DivNotAppliedContents>
          {/* )} */}
        </Styles.DivProjectList>
      </Styles.DivWrapperContent>
    </Styles.DivAppliedWrapper>
  );
};
