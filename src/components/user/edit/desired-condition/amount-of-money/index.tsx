import { Button } from "@mui/material";
import { useState } from "react";
import { AMOUNT_OF_MONEY } from "@/components/user/edit/desired-condition/amount-of-money/const";

export const AmountOfMoney = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {AMOUNT_OF_MONEY.map((item, idx) => {
        if (selectedOption === item) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedAmmountOfMoneyButton"
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
              name="selectAmmountOfMoneyButton"
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
