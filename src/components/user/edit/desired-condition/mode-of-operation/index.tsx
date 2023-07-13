import { Button } from "@mui/material";
import { useState } from "react";
import { MODE_OF_OPERATION } from "@/components/user/edit/desired-condition/mode-of-operation/const";

export const ModeOfOperation = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleButtonClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      {MODE_OF_OPERATION.map((item, idx) => {
        if (selectedOptions.includes(item)) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedModeOfOperationButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "460px", margin: "4px", background: "#2c345c" }}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={idx}
              name="selectModeOfOperationButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "460px", margin: "4px", border: "1px solid #a1a1a1", color: "#a1a1a1" }}
            >
              {item}
            </Button>
          );
        }
      })}
    </>
  );
};
