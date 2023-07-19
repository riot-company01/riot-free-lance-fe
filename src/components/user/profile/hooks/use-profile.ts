import { useState } from "react";

export const useProfile = (skillSheet: string | null | undefined) => {
  const [uploadFile, setUploadFile] = useState<string | null | undefined>(skillSheet);

  const onChangeUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFile(event.target.files?.[0].name);
  };

  return {
    uploadFile,
    onChangeUploadFile,
  };
};
