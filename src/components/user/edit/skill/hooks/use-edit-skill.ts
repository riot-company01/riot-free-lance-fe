import { useCallback, useState } from "react";
import type { ChangeEvent } from "react";

export const useEditSkill = () => {
  const [selectedProfessionalExperiences, setSelectedProfessionalExperiences] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedFrameWorks, setSelectedFrameWorks] = useState<string[]>([]);
  const [selectedLanguageLibralies, setSelectedLanguageLibralies] = useState<string[]>([]);
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
    selectedProfessionalExperiences,
    selectedIndustries,
    selectedFrameWorks,
    selectedLanguageLibralies,
    portfolio,
    textArea,
    uploadFile,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedFrameWorks,
    setSelectedLanguageLibralies,
    onChangePortfolio,
    onChangeTextArea,
    onChangeUploadFile,
  };
};
