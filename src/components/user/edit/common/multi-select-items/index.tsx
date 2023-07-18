import type { Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";

type MultiSelectItemsProps = {
  data: string[];
  name: string;
  width: number;
  selectedOptions: string[];
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
};

export const MultiSelectItems = (props: MultiSelectItemsProps) => {
  const { data, name, width, selectedOptions, setSelectedOptions } = props;

  const handleButtonClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      {data.map((item, idx) => {
        if (selectedOptions.includes(item)) {
          return (
            <Styles.SelectedButton
              key={idx}
              variant="contained"
              name={`selected${name}Button`}
              width={width}
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Styles.SelectedButton>
          );
        } else {
          return (
            <Styles.NotSelectedStyle
              variant="outlined"
              key={idx}
              name={`notSelected${name}Button`}
              width={width}
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </Styles.NotSelectedStyle>
          );
        }
      })}
    </>
  );
};
