import { ChangeEvent } from "react";
import * as Styles from "./styles";

export type InputProps = {
  type: Exclude<JSX.IntrinsicElements["input"]["type"], undefined>;
  name: string;
  value: string;
  width: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const { type, name, value, placeholder, width, onChange } = props;

  return (
    <Styles.InputField
      type={type}
      name={name}
      value={value}
      width={width}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
