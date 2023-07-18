import { useState } from "react";

export const useProfile = () => {
  const [uploadFile, setUploadFile] = useState<File | undefined>(undefined);

  const onChangeUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFile(event.target.files?.[0]);
  };

  return {
    uploadFile,
    onChangeUploadFile,
  };
};
