import * as Styles from "./styles";
import { ProfileInfo } from "@/components/user/profile/profile-info";
import { ProfileSummary } from "@/components/user/profile/profile-summary";

export const Profile = () => {
  return (
    <Styles.DivWrapper>
      <ProfileSummary />
      <ProfileInfo />
    </Styles.DivWrapper>
  );
};
