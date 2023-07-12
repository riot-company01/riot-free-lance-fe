import { useState } from "react";
import { AMOUNT_OF_MONEY } from "./const";
import * as Styles from "./styles";

export const AmountOfMoney = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {AMOUNT_OF_MONEY.map((item, idx) => {
        return (
          <Styles.ButtonWrapper
            key={idx}
            name="selectedAmmountOfMoneyButton"
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
