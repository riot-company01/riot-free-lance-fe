import { ChangeEvent, useCallback, useState } from "react";

export const useEditSkill = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userFirstNameKana, setUserFirstNameKana] = useState("");
  const [userLastNameKana, setUserLastNameKana] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

  const onChangeUserFirstName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserFirstName(e.target.value),
    []
  );

  const onChangeUserLastName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserLastName(e.target.value),
    []
  );
  const onChangeUserFirstNameKana = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserFirstNameKana(e.target.value),
    []
  );
  const onChangeUserLastNameKana = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserLastNameKana(e.target.value),
    []
  );

  const selectYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const selectMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const selectDay = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
  };

  const onChangeMailAddress = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setMailAddress(e.target.value),
    []
  );

  const onChangePhoneNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value),
    []
  );

  const selectPrefecture = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrefecture(e.target.value);
  };

  return {
    userFirstName,
    userLastName,
    userFirstNameKana,
    userLastNameKana,
    selectedYear,
    selectedMonth,
    selectedDay,
    mailAddress,
    phoneNumber,
    selectedPrefecture,
    onChangeUserFirstName,
    onChangeUserLastName,
    onChangeUserFirstNameKana,
    onChangeUserLastNameKana,
    selectYear,
    selectMonth,
    selectDay,
    onChangeMailAddress,
    onChangePhoneNumber,
    selectPrefecture,
  };
};
