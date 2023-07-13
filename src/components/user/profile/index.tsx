import * as Styles from "./styles";
import { FileUpload } from "@/components/user/profile/common/file-upload";
import { useProfile } from "@/components/user/profile/hooks/use-profile";
import { ProfileInfo } from "@/components/user/profile/profile-info";
import { ProfileSummary } from "@/components/user/profile/profile-summary";

export const Profile = () => {
  const { uploadFile, onChangeUploadFile } = useProfile();
  return (
    <Styles.DivWrapper>
      <Styles.DivSummaryContent>
        <FileUpload onChange={onChangeUploadFile} />
        {uploadFile && <p>{uploadFile.name}</p>}
        <ProfileSummary />
      </Styles.DivSummaryContent>
      <ProfileInfo skillSheet={uploadFile} />
    </Styles.DivWrapper>
  );
};
