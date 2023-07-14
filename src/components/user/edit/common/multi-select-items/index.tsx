import { Button } from "@mui/material";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

type MultiSelectItemsProps = {
  data: string[];
  name: string;
  selectedStyle: CSSProperties;
  notSelectedStyle: CSSProperties;
  selectedOptions: string[];
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
};

export const MultiSelectItems = (props: MultiSelectItemsProps) => {
  const { data, name, selectedStyle, notSelectedStyle, selectedOptions, setSelectedOptions } = props;

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
            <Button
              variant="contained"
              key={idx}
              name={`selected${name}Button`}
              onClick={() => handleButtonClick(item)}
              style={selectedStyle}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={idx}
              name={`notSelected${name}Button`}
              onClick={() => handleButtonClick(item)}
              style={notSelectedStyle}
            >
              {item}
            </Button>
          );
        }
      })}
    </>
  );
};
