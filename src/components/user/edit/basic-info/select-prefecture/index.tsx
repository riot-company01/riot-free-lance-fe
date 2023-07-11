import React, { ChangeEvent } from "react";
import * as Styles from "./styles";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectPrefecture = ({ value, onChange }: Props) => {
  return (
    <Styles.SelectPrefecture value={value} onChange={onChange}>
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
