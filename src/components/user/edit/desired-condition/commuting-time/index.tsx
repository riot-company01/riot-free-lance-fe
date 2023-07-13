import { Button } from "@mui/material";
import { useState } from "react";
import { COMMUTING_TIME } from "./const";

export const CommutingTime = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {COMMUTING_TIME.map((item, idx) => {
        if (selectedOption === item) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedCummitingTimeButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "460px", margin: "4px" }}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={idx}
              name="selectCummitingTimeButton"
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
