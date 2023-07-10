import { useState } from "react";

import * as Styles from "./styles";

export const ProfessionalExperience = () => {
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
      <Styles.ButtonWrapper
        name="selectedFreeLanceButton"
        onClick={() => handleButtonClick("フリーランス")}
        isSelected={selectedOptions.includes("フリーランス")}
      >
        <Styles.ParText isSelected={selectedOptions.includes("フリーランス")}>
          フリーランス
        </Styles.ParText>
      </Styles.ButtonWrapper>
    </>
  );
};
