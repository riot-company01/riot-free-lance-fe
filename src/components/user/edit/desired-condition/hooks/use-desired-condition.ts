import { useState } from "react";

export const useDesiredCondition = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [selectedCommutingTime, setSelectedCommutingTime] = useState("");
  const [selectedAmountOfMoney, setSelectedAmountOfMoney] = useState("");
  const [selectedAvailableDays, setSelectedAvailableDays] = useState("");
  const [selectedProfessionalExperiences, setSelectedProfessionalExperiences] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedOperationStartDate, setSelectedOperationStartDate] = useState("時期選択");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedModeOfOperation, setSelectedModeOfOperation] = useState<string[]>([]);
  const [selectedDesiredSkills, setSelectedDesiredSkills] = useState<string[]>([]);

  return {
    selectedPrefecture,
    selectedCommutingTime,
    selectedAmountOfMoney,
    selectedAvailableDays,
    selectedProfessionalExperiences,
    selectedOperationStartDate,
    selectedYear,
    selectedMonth,
    selectedIndustries,
    selectedModeOfOperation,
    selectedDesiredSkills,
    setSelectedOperationStartDate,
    setSelectedYear,
    setSelectedMonth,
    setSelectedPrefecture,
    setSelectedCommutingTime,
    setSelectedAmountOfMoney,
    setSelectedAvailableDays,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedModeOfOperation,
    setSelectedDesiredSkills,
  };
};
