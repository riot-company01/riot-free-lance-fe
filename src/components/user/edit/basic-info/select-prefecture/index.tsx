import { FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { PREFECTURES } from "./const";
import { selectMyStyle } from "@/components/user/edit/const";

export const SelectPrefecture = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

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
