import type { ChangeEvent } from "react";
import { useState } from "react";
import * as Styles from "./styles";
import { OPERATION_START_DATE } from "@/components/user/edit/desired-condition/operation-start-date/const";

export const OperationStartDate = () => {
  const [selectedOption, setSelectedOption] = useState("時期選択");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = currentYear; i <= currentYear + 1; i++) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return years;
  };

  const generateMonthOptions = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
      months.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return months;
  };

  const selectYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const selectMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <>
      {OPERATION_START_DATE.map((item, idx) => {
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedOperationStartDateButton"
            onClick={() => handleButtonClick(item)}
            isSelected={selectedOption === item}
          >
            <Styles.ParText isSelected={selectedOption === item}>{item}</Styles.ParText>
          </Styles.ButtonWrapper>
        );
      })}
      {selectedOption === "時期選択" && (
        <Styles.DivWrapper>
          <Styles.SelectYear value={selectedYear} onChange={selectYear}>
            <option value="">選択してください</option>
            {generateYearOptions()}
          </Styles.SelectYear>

          <Styles.SelectMount value={selectedMonth} onChange={selectMonth}>
            <option value="">選択してください</option>
            {generateMonthOptions()}
          </Styles.SelectMount>
          <Styles.DivWrapper>
            <Styles.PerNote>※案件開始可能時期を選択してください</Styles.PerNote>
          </Styles.DivWrapper>
        </Styles.DivWrapper>
      )}
    </>
  );
};
