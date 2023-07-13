import { MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import { PREFECTURES } from "./const";

export const SelectPrefecture = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

  const selectPrefecture = (e: SelectChangeEvent<string>) => {
    setSelectedPrefecture(e.target.value);
  };
  return (
    <Select value={selectedPrefecture} onChange={selectPrefecture} style={{ width: "380px" }}>
      {PREFECTURES.map((prefecture, index) => (
        <MenuItem key={index} value={prefecture}>
          {prefecture}
        </MenuItem>
      ))}
    </Select>
  );
};
