import * as Styles from "./styles";
import { EditBasicInfo } from "@/components/user/profile/common/basic-info";
import { DesiredCondition } from "@/components/user/profile/common/desired-condition";
import { EditSkill } from "@/components/user/edit/skill";

export const ProfileInfo = () => {
  return (
    <>
      <Styles.DivProfileInfoWrapper>
        <EditBasicInfo />
        <Styles.Hr />
        <EditSkill />
        <Styles.Hr />
        <DesiredCondition />
      </Styles.DivProfileInfoWrapper>
    </>
  );
};
