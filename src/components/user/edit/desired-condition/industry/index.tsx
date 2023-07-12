import { useState } from "react";
import { INDUSTRY } from "./const";

import * as Styles from "./styles";

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
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedIndustryButton"
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
