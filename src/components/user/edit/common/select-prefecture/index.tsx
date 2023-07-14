import { FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import React from "react";
import type { Dispatch, SetStateAction } from "react";
import { PREFECTURES } from "@/components/user/edit/common/select-prefecture/mock";
import { selectMyStyle } from "@/components/user/edit/const";

type SelectPrefectureProps = {
  selectedPrefecture: string;
  setSelectedPrefecture: Dispatch<SetStateAction<string>>;
};
export const SelectPrefecture = (props: SelectPrefectureProps) => {
  const { selectedPrefecture, setSelectedPrefecture } = props;
  const selectPrefecture = (e: SelectChangeEvent<string>) => {
    setSelectedPrefecture(e.target.value);
  };
  return (
    <FormControl sx={selectMyStyle} variant="outlined" style={{ width: "380px" }}>
      <Select value={selectedPrefecture} onChange={selectPrefecture}>
        {PREFECTURES.map((prefecture, index) => (
          <MenuItem key={index} value={prefecture}>
            {prefecture}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
