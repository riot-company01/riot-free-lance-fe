import { useState } from "react";
import { CURRENT_SITUATION } from "./const";
import * as Styles from "./styles";

export const CurrentSituation = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {CURRENT_SITUATION.map((item) => {
        return (
          <Styles.ButtonWrapper
            name="selectedFreeLanceButton"
            onClick={() => handleButtonClick(item)}
            isSelected={selectedOption === item}
          >
            <Styles.ParText isSelected={selectedOption === item}>
              {item}
            </Styles.ParText>
          </Styles.ButtonWrapper>
        );
      })}
    </>
  );
};
