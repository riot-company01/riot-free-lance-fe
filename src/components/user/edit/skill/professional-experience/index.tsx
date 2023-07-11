import { useState } from "react";
import { PROFESSIONAL_EXPERIENCE } from "./const";

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
      {PROFESSIONAL_EXPERIENCE.map((item, idx) => {
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedFullTimeEmployeeButton"
            onClick={() => handleButtonClick(item)}
            isSelected={selectedOptions.includes(item)}
          >
            <Styles.ParText isSelected={selectedOptions.includes(item)}>{item}</Styles.ParText>
          </Styles.ButtonWrapper>
        );
      })}
    </>
  );
};
