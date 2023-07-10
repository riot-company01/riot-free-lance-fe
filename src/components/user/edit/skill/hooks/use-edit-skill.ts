import { ChangeEvent, useCallback, useState } from "react";

export const useEditSkill = () => {
  const [portfolio, setPortfolio] = useState("");

  const onChangePortfolio = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPortfolio(e.target.value),
    []
  );

  return {
    portfolio,
    onChangePortfolio,
  };
};
