import { useCallback, useState } from "react";
import type { ChangeEvent } from "react";

export const useEditSkill = () => {
  const [portfolio, setPortfolio] = useState("");
  const [textArea, setTextArea] = useState("");
  const [uploadFile, setUploadFile] = useState<File | undefined>(undefined);

  const onChangePortfolio = useCallback((e: ChangeEvent<HTMLInputElement>) => setPortfolio(e.target.value), []);

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };
  const onChangeUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFile(event.target.files?.[0]);
  };

  return {
    portfolio,
    textArea,
    uploadFile,
    onChangePortfolio,
    onChangeTextArea,
    onChangeUploadFile,
  };
};
