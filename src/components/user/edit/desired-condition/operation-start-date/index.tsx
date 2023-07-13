import { Button, FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./styles";
import { selectMyStyle } from "@/components/user/edit/const";
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
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return years;
  };

  const generateMonthOptions = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
      months.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return months;
  };

  const selectYear = (e: SelectChangeEvent<string>) => {
    setSelectedYear(e.target.value);
  };

  const selectMonth = (e: SelectChangeEvent<string>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <>
      {OPERATION_START_DATE.map((item, idx) => {
        if (selectedOption === item) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedOperationStartDateButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "308px", margin: "4px", background: "#2c345c" }}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={idx}
              name="selectOperationStartDateButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "308px", margin: "4px", border: "1px solid #a1a1a1", color: "#a1a1a1" }}
            >
              {item}
            </Button>
          );
        }
      })}

      {selectedOption === "時期選択" && (
        <Styles.DivWrapper>
          <FormControl sx={selectMyStyle} variant="outlined" style={{ width: "380px", marginRight: "16px" }}>
            <Select value={selectedYear} onChange={selectYear}>
              {generateYearOptions()}
            </Select>
          </FormControl>

          <FormControl sx={selectMyStyle} variant="outlined" style={{ width: "200px", marginLeft: "16px" }}>
            <Select value={selectedMonth} onChange={selectMonth}>
              {generateMonthOptions()}
            </Select>
          </FormControl>
          <Styles.DivWrapper>
            <Styles.PerNote>※案件開始可能時期を選択してください</Styles.PerNote>
          </Styles.DivWrapper>
        </Styles.DivWrapper>
      )}
    </>
  );
};
