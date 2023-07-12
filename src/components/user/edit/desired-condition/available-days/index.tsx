import { useState } from "react";
import * as Styles from "./styles";
import { AVAILABLE_DAYS } from "@/components/user/edit/desired-condition/available-days/const";

export const AvailableDays = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {AVAILABLE_DAYS.map((item, idx) => {
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedAvailableDaysButton"
            onClick={() => handleButtonClick(item)}
            isSelected={selectedOption === item}
          >
            <Styles.ParText isSelected={selectedOption === item}>{item}</Styles.ParText>
          </Styles.ButtonWrapper>
        );
      })}
    </>
  );
};
