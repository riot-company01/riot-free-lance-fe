import { useState } from "react";
import { MODE_OF_OPERATION } from "./const";

import * as Styles from "./styles";

export const ModeOfOperation = () => {
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
      {MODE_OF_OPERATION.map((item, idx) => {
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedModeOfOperationButton"
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
