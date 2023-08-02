import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styles from "./styles";

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
              <p>お気に入り</p>
            </Styles.DivItems>
            <Styles.DivItems>
              <Link href={"/user/applied"} passHref>
                <Styles.PerFavorite>応募済み案件を見る</Styles.PerFavorite>
              </Link>
            </Styles.DivItems>
          </Styles.DivSummary>
        </Styles.DivWrapper>
        <Styles.DivProjectList>
          {/* {MOCK_PROJECT_DATA ? (
            MOCK_PROJECT_DATA.map((item) => <ProjectContent key={item.id} item={item} />)
          ) : ( */}
          <Styles.DivNotFavoriteContents>
            <Styles.DivNotFavoriteItem>
              <Styles.PerNotFavoriteItem>まだお気に入りの案件はありません</Styles.PerNotFavoriteItem>
            </Styles.DivNotFavoriteItem>

            <Button variant="contained" onClick={handleSearchProjectButtonClick}>
              保存する
            </Button>
          </Styles.DivNotFavoriteContents>
          {/* )} */}
        </Styles.DivProjectList>
      </Styles.DivWrapperContent>
    </Styles.DivFavoriteWrapper>
  );
};
