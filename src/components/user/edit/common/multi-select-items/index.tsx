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
              //style={{ height: "48px", width: "150px", margin: "4px", background: "#2c345c" }}
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
              // style={{ height: "48px", width: "150px", margin: "4px", border: "1px solid #a1a1a1", color: "#a1a1a1" }}
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
