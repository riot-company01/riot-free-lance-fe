import * as Styles from "./styles";
import { ProfileSummary } from "@/components/user/profile/profile-summary";
import { ProfileInfo } from "@/components/user/profile/profile-info";

export const Profile = () => {
  return (
    <Styles.DivWrapper>
      <ProfileSummary />
      <ProfileInfo />
    </Styles.DivWrapper>
  );
};
