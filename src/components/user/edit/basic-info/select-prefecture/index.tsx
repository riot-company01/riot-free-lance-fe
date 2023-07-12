import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { PREFECTURES } from "./const";
import * as Styles from "./styles";

const SelectPrefecture = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

  const selectPrefecture = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrefecture(e.target.value);
  };
  return (
    <Styles.SelectPrefecture value={selectedPrefecture} onChange={selectPrefecture}>
      <option value="">選択してください</option>
      {PREFECTURES.map((prefecture, index) => (
        <option key={index} value={prefecture}>
          {prefecture}
        </option>
      ))}
    </Styles.SelectPrefecture>
  );
};

export default SelectPrefecture;
