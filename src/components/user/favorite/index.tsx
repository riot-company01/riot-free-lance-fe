import Link from "next/link";
import * as Styles from "./styles";

export const Fovarite = () => {
  return (
    <Styles.DivFavoriteWrapper>
      <Styles.FavoriteListHeader>
        <Styles.HeadTitle>お気に入り案件一覧</Styles.HeadTitle>
      </Styles.FavoriteListHeader>
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
      {/* <Styles.DivProjectList>

      </Styles.DivProjectList> */}
    </Styles.DivFavoriteWrapper>
  );
};
