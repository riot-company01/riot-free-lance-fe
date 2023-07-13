import { Button } from "@mui/material";
import { useState } from "react";
import { INDUSTRY } from "./const";

export const Industry = () => {
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
      {INDUSTRY.map((item, idx) => {
        if (selectedOptions.includes(item)) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedIndustryButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "150px", margin: "4px", background: "#2c345c" }}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={idx}
              name="selectIndustryButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "150px", margin: "4px", border: "1px solid #a1a1a1", color: "#a1a1a1" }}
            >
              {item}
            </Button>
          );
        }
      })}
    </>
  );
};
