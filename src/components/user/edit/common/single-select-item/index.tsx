import { Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";

type SingleSelectItemProps = {
  data: string[];
  name: string;
  width: number;
  selectedOption?: string;
  setSelectedOption: Dispatch<SetStateAction<string | undefined>>;
};

export const SingleSelectItem = (props: SingleSelectItemProps) => {
  const { data, name, width, selectedOption, setSelectedOption } = props;

  return (
    <>
      {data.map((item) => {
        if (selectedOption === item) {
          return (
            <Styles.SelectedButton
              variant="contained"
              key={item}
              width={width}
              name={`selected${name}Button`}
              onClick={() => setSelectedOption(item)}
            >
              {item}
            </Styles.SelectedButton>
          );
        } else {
          return (
            <Styles.NotSelectedStyle
              variant="outlined"
              key={item}
              width={width}
              name={`notSelected${name}Button`}
              onClick={() => setSelectedOption(item)}
            >
              {item}
            </Styles.NotSelectedStyle>
          );
        }
      })}
    </>
  );
};
