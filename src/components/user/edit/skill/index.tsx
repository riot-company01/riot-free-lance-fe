import { Input } from "@/components/common/input";
import { PATHS } from "@/const/paths";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { Tag } from "../common/tag";
import * as Styles from "./styles";
import { useEditSkill } from "./hooks/use-edit-skill";
import { CurrentSituation } from "../basic-info/current-situation";
import SelectPrefecture from "../basic-info/select-prefecture";
import { ProfessionalExperience } from "./professional-experience";

export const EditSkill = () => {
  const { user } = useUser();
  const { push } = useRouter();
  const {} = useEditSkill();

  const handleCancelButtonClick = () => {
    push(PATHS.PROFILE);
  };

  const handleKeepButtonClick = () => {
    push(PATHS.PROFILE);
  };

  return (
    <Styles.DivEditBasicInfoWrapper>
      <Styles.HeadTitle>スキル・経験</Styles.HeadTitle>
      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>経験職種</h3>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <ProfessionalExperience />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivButtonWrapper>
        <Styles.CancelButtonWrapper
          name="selectedFreeLanceButton"
          onClick={() => handleCancelButtonClick()}
        >
          <Styles.ParCancelText>キャンセル</Styles.ParCancelText>
        </Styles.CancelButtonWrapper>
        <Styles.KeepButtonWrapper
          name="selectedFreeLanceButton"
          onClick={() => handleKeepButtonClick()}
        >
          <Styles.ParKeepText>保存する</Styles.ParKeepText>
        </Styles.KeepButtonWrapper>
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
