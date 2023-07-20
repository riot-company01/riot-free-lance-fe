import { useCallback, useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import type { GetUserSkillQuery } from "@/lib/graphql/graphql";

export const useEditSkill = (data: GetUserSkillQuery | undefined) => {
  const ussrSkillInfo = data?.users[0];
  const [selectedProfessionalExperiences, setSelectedProfessionalExperiences] = useState(
    ussrSkillInfo?.professional_experience || []
  );
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(ussrSkillInfo?.industries || []);
  const [selectedFrameWorks, setSelectedFrameWorks] = useState<string[]>(ussrSkillInfo?.frame_work || []);
  const [selectedLanguageLibralies, setSelectedLanguageLibralies] = useState<string[]>(
    ussrSkillInfo?.language_libraries || []
  );
  const [portfolio, setPortfolio] = useState(ussrSkillInfo?.portfolio);
  const [textArea, setTextArea] = useState(ussrSkillInfo?.self_pr || "");
  const [uploadFileName, setUploadFileName] = useState<string>(ussrSkillInfo?.file_name || "");
  const [uploadFilePath, setUploadFilePath] = useState<string>(ussrSkillInfo?.file_data || "");

  const onChangePortfolio = useCallback((e: ChangeEvent<HTMLInputElement>) => setPortfolio(e.target.value), []);

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };
  const onChangeUploadFileName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFileName(event.target.value);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const filePath = URL.createObjectURL(selectedFile);
      console.log(filePath);
      setUploadFilePath(filePath);
    }
  };

  useEffect(() => {
    setSelectedProfessionalExperiences(ussrSkillInfo?.professional_experience || []);
    setSelectedIndustries(ussrSkillInfo?.industries || []);
    setSelectedFrameWorks(ussrSkillInfo?.frame_work || []);
    setSelectedLanguageLibralies(ussrSkillInfo?.language_libraries || []);
    setPortfolio(ussrSkillInfo?.portfolio);
    setTextArea(ussrSkillInfo?.self_pr || "");
    setUploadFileName(ussrSkillInfo?.file_name || "");
    setUploadFilePath(ussrSkillInfo?.file_data || "");
  }, [ussrSkillInfo]);

  return {
    selectedProfessionalExperiences,
    selectedIndustries,
    selectedFrameWorks,
    selectedLanguageLibralies,
    portfolio,
    textArea,
    uploadFileName,
    uploadFilePath,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedFrameWorks,
    setSelectedLanguageLibralies,
    onChangePortfolio,
    onChangeTextArea,
    onChangeUploadFileName,
  };
};
