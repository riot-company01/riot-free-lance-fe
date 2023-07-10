import * as Styles from "./styles";
import { FileUpload } from "../common/file-upload";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileSummary = () => {
  return (
    <Styles.DivProfileSummaryWrapper>
      <FileUpload />

      <Styles.DivWrapper>
        <Styles.DivHeadFlex>
          <Styles.HeadName>名前</Styles.HeadName>
          <Styles.AnchorItem href="">
            <Styles.SpanIcon>
              <FontAwesomeIcon
                icon={faPen}
                size={"1x"}
                style={{ color: "#20b2aa" }}
              />
            </Styles.SpanIcon>
            編集
          </Styles.AnchorItem>
        </Styles.DivHeadFlex>
        <Styles.DivItem>
          <Styles.PerMargin>経験職種</Styles.PerMargin>
          <Styles.PerMargin>最寄り駅</Styles.PerMargin>
        </Styles.DivItem>
        <Styles.DivAddSkill>
          <Styles.AnchorItem href="">
            <Styles.SpanIcon>
              <FontAwesomeIcon
                icon={faPen}
                size={"1x"}
                style={{ color: "#20b2aa" }}
              />
            </Styles.SpanIcon>
            開発経験スキルを追加
          </Styles.AnchorItem>
        </Styles.DivAddSkill>
        <Styles.Hr />
        <Styles.DivTitle>
          <Styles.HeadName>仕事探し状況</Styles.HeadName>
        </Styles.DivTitle>
        <Styles.DivWrpperSituation>
          <Styles.DivItem>
            <Styles.AnchorItem href="">気になる案件</Styles.AnchorItem>
          </Styles.DivItem>
          <Styles.DivItem>
            <Styles.AnchorItem href="">応募済み案件</Styles.AnchorItem>
          </Styles.DivItem>
        </Styles.DivWrpperSituation>
      </Styles.DivWrapper>
    </Styles.DivProfileSummaryWrapper>
  );
};
