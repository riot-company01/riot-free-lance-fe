import type { ChangeEvent } from "react";
import * as Styles from "./styles";

type FileUploadProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const FileUpload = ({ onChange }: FileUploadProps) => {
  return (
    <>
      <Styles.LabelFileUpload>
        <input type="file" name="file" onChange={onChange} />
        経歴書をアップロード
      </Styles.LabelFileUpload>
    </>
  );
};
