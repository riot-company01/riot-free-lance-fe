import { FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";
import { SingleSelectItem } from "@/components/user/edit/common/single-select-item";
import { OPERATION_START_DATE } from "@/components/user/edit/common/single-select-item/mock";
import { selectMyStyle } from "@/components/user/edit/const";

type OperationStartDateProps = {
  selectedOption: string;
  selectedYear: string;
  selectedMonth: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  setSelectedYear: Dispatch<SetStateAction<string>>;
  setSelectedMonth: Dispatch<SetStateAction<string>>;
};

export const OperationStartDate = (props: OperationStartDateProps) => {
  const { selectedOption, selectedYear, selectedMonth, setSelectedOption, setSelectedYear, setSelectedMonth } = props;

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
      <SingleSelectItem
        data={OPERATION_START_DATE}
        name={"OperationStartDate"}
        selectedStyle={{ height: "48px", width: "308px", margin: "4px", background: "#2c345c" }}
        notSelectedStyle={{
          height: "48px",
          width: "308px",
          margin: "4px",
          border: "1px solid #a1a1a1",
          color: "#a1a1a1",
        }}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

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
