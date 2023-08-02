import { useState, useEffect } from "react";
import type { GetUserDesiredConditionQuery } from "@/lib/graphql/graphql";

export const useDesiredCondition = (data: GetUserDesiredConditionQuery | undefined) => {
  const desiredConditionInfo = data?.users[0];
  const [selectedPrefecture, setSelectedPrefecture] = useState(desiredConditionInfo?.preferred_place_of_work);
  const [selectedCommutingTime, setSelectedCommutingTime] = useState(desiredConditionInfo?.commuting_time);
  const [selectedAmountOfMoney, setSelectedAmountOfMoney] = useState(desiredConditionInfo?.amount_of_money);
  const [selectedAvailableDays, setSelectedAvailableDays] = useState(desiredConditionInfo?.available_day);
  const [selectedProfessionalExperiences, setSelectedProfessionalExperiences] = useState(
    desiredConditionInfo?.desired_occupation
  );
  const [selectedIndustries, setSelectedIndustries] = useState(desiredConditionInfo?.desired_industries);
  const [selectedOperationStartDate, setSelectedOperationStartDate] = useState(
    desiredConditionInfo?.project_start_time
  );
  const [selectedYear, setSelectedYear] = useState(desiredConditionInfo?.project_start_year);
  const [selectedMonth, setSelectedMonth] = useState(desiredConditionInfo?.project_start_mounth);
  const [selectedModeOfOperation, setSelectedModeOfOperation] = useState(desiredConditionInfo?.mode_of_operation);
  const [selectedDesiredSkills, setSelectedDesiredSkills] = useState(desiredConditionInfo?.desired_skills);

  useEffect(() => {
    setSelectedPrefecture(desiredConditionInfo?.preferred_place_of_work);
    setSelectedCommutingTime(desiredConditionInfo?.commuting_time);
    setSelectedAmountOfMoney(desiredConditionInfo?.amount_of_money);
    setSelectedAvailableDays(desiredConditionInfo?.available_day);
    setSelectedProfessionalExperiences(desiredConditionInfo?.desired_occupation);
    setSelectedIndustries(desiredConditionInfo?.desired_industries);
    setSelectedOperationStartDate(desiredConditionInfo?.project_start_time);
    setSelectedYear(desiredConditionInfo?.project_start_year);
    setSelectedMonth(desiredConditionInfo?.project_start_mounth);
    setSelectedModeOfOperation(desiredConditionInfo?.mode_of_operation);
    setSelectedDesiredSkills(desiredConditionInfo?.desired_skills);
  }, [desiredConditionInfo]);

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
