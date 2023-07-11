import { useCallback, useState } from "react";
import type { ChangeEvent } from "react";

export const useEditSkill = () => {
  const [portfolio, setPortfolio] = useState("");
  const [textArea, setTextArea] = useState("");

  const onChangePortfolio = useCallback((e: ChangeEvent<HTMLInputElement>) => setPortfolio(e.target.value), []);

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };

  return {
    portfolio,
    textArea,
    onChangePortfolio,
    onChangeTextArea,
  };
};
