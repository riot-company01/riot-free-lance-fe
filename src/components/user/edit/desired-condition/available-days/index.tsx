import { Button } from "@mui/material";
import { useState } from "react";
import { AVAILABLE_DAYS } from "./const";

export const AvailableDays = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {AVAILABLE_DAYS.map((item, idx) => {
        if (selectedOption === item) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedAvailableDaysButton"
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
              name="selectAvailableDaysButton"
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
