import { FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";
import { SingleSelectItem } from "@/components/user/profile/common/single-select-item";
import { OPERATION_START_DATE } from "@/components/user/profile/common/single-select-item/mock";
import { selectBigStyle, selectSmallStyle } from "@/components/user/edit/const";

type OperationStartDateProps = {
  selectedOption: string;
  selectedYear: string;
  selectedMonth: string;
  setSelectedOption: Dispatch<SetStateAction<string | null | undefined>>;
  setSelectedYear: Dispatch<SetStateAction<string | undefined>>;
  setSelectedMonth: Dispatch<SetStateAction<string | undefined>>;
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
        width={308}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      {selectedOption === "時期選択" && (
        <Styles.DivWrapper>
          <FormControl sx={selectBigStyle} variant="outlined">
            <Select value={selectedYear} onChange={selectYear}>
              {generateYearOptions()}
            </Select>
          </FormControl>

          <FormControl sx={selectSmallStyle} variant="outlined">
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
