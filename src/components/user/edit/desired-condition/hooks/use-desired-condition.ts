import { useState } from "react";
import type { ChangeEvent } from "react";

export const useDesiredCondition = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

  const selectPrefecture = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrefecture(e.target.value);
  };

  return {
    selectedPrefecture,
    selectPrefecture,
  };
};
