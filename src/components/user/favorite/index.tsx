import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { ProjectContent } from "@/components/user/common/project-content";
import { MOCK_PROJECT_DATA } from "@/components/user/favorite/const";

export const Fovarite = () => {
  const { push } = useRouter();
  const handleSearchProjectButtonClick = () => {
    push("/project/");
  };
  return (
    <Styles.DivFavoriteWrapper>
      <Styles.FavoriteListHeader>
        <Styles.HeadTitle>お気に入り案件一覧</Styles.HeadTitle>
      </Styles.FavoriteListHeader>
      <Styles.DivWrapperContent>
        <Styles.DivWrapper>
          <Styles.DivSummary>
            <Styles.HeadSummaryTitle>案件管理</Styles.HeadSummaryTitle>
            <Styles.DivItems>
              <Styles.PerFavorite>お気に入り</Styles.PerFavorite>
            </Styles.DivItems>
            <Styles.DivItems>
              <Link href={"/user/applied"}>応募済み案件を見る</Link>
            </Styles.DivItems>
          </Styles.DivSummary>
        </Styles.DivWrapper>
        <Styles.DivProjectList>
          {MOCK_PROJECT_DATA ? (
            MOCK_PROJECT_DATA.map((item) => <ProjectContent key={item.id} item={item} />)
          ) : (
            <Styles.DivNotFavoriteContents>
              <Styles.DivNotFavoriteItem>
                <Styles.PerNotFavoriteItem>まだお気に入りの案件はありません</Styles.PerNotFavoriteItem>
              </Styles.DivNotFavoriteItem>

              <Button
                name="searchProjectButton"
                onClick={() => handleSearchProjectButtonClick()}
                style={{ height: "40px", width: "400px" }}
              >
                案件を探す
              </Button>
            </Styles.DivNotFavoriteContents>
          )}
        </Styles.DivProjectList>
      </Styles.DivWrapperContent>
    </Styles.DivFavoriteWrapper>
  );
};
