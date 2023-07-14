import { Button } from "@mui/material";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

type SingleSelectItemProps = {
  data: string[];
  name: string;
  selectedStyle: CSSProperties;
  notSelectedStyle: CSSProperties;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
};

export const SingleSelectItem = (props: SingleSelectItemProps) => {
  const { data, name, selectedStyle, notSelectedStyle, selectedOption, setSelectedOption } = props;

  return (
    <>
      {data.map((item) => {
        if (selectedOption === item) {
          return (
            <Button
              variant="contained"
              key={item}
              name={`selected${name}Button`}
              onClick={() => setSelectedOption(item)}
              style={selectedStyle}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={item}
              name={`notSelected${name}Button`}
              onClick={() => setSelectedOption(item)}
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
