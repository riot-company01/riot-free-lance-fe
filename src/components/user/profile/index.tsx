import * as Styles from "./styles";
import { ProfileInfo } from "@/components/user/profile/profile-info";
import { ProfileSummary } from "@/components/user/profile/profile-summary";

export const Profile = () => {
  return (
    <Styles.DivWrapper>
      <Styles.DivSummaryContent>
        <ProfileSummary />
      </Styles.DivSummaryContent>
      <ProfileInfo />
    </Styles.DivWrapper>
  );
};
