import * as Styles from "./styles";

export const ProfileSummary = () => {
  return (
    <Styles.DivProfileSummaryWrapper>
      <Styles.DivWrapper>
        <Styles.DivTitle>
          <Styles.HeadName>仕事探し状況</Styles.HeadName>
        </Styles.DivTitle>
        <Styles.DivWrpperSituation>
          <Styles.DivItem>
            <Styles.AnchorItem href="/user/favorite/">気になる案件</Styles.AnchorItem>
          </Styles.DivItem>
          <Styles.DivItem>
            <Styles.AnchorItem href="/user/applied/">応募済み案件</Styles.AnchorItem>
          </Styles.DivItem>
        </Styles.DivWrpperSituation>
      </Styles.DivWrapper>
    </Styles.DivProfileSummaryWrapper>
  );
};
