import * as Styles from "./styles";
import { FileUpload } from "../common/file-upload";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileSummary = () => {
  return (
    <div>
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
          <p>経験職種</p>
          <p>最寄り駅</p>
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
        <hr />
        <Styles.DivItem>
          <Styles.HeadName>仕事探し状況</Styles.HeadName>
        </Styles.DivItem>
        <Styles.DivWrpperSituation>
          <Styles.AnchorItem href="">気になる案件</Styles.AnchorItem>
          <Styles.AnchorItem href="">応募済み案件</Styles.AnchorItem>
        </Styles.DivWrpperSituation>
      </Styles.DivWrapper>
    </div>
  );
};
