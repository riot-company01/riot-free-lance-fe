import { useState } from "react";
import { COMMUTING_TIME } from "./const";
import * as Styles from "./styles";

export const CommutingTime = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {COMMUTING_TIME.map((item, idx) => {
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedCummitingTimeButton"
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
