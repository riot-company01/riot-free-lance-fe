import type { SelectChangeEvent } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { GetUserBasicInfoQuery } from "@/lib/graphql/graphql";

export const useBasicInfo = (data: GetUserBasicInfoQuery | undefined) => {
  const userBasicInfo = data?.users[0];

  const [userFirstName, setUserFirstName] = useState(userBasicInfo?.first_name);
  const [userLastName, setUserLastName] = useState(userBasicInfo?.last_name);
  const [userFirstNameKana, setUserFirstNameKana] = useState(userBasicInfo?.first_name_kana);
  const [userLastNameKana, setUserLastNameKana] = useState(userBasicInfo?.last_name_kana);
  const [selectedYear, setSelectedYear] = useState(userBasicInfo?.birthday_year);
  const [selectedMonth, setSelectedMonth] = useState(userBasicInfo?.birthday_mounth);
  const [selectedDay, setSelectedDay] = useState(userBasicInfo?.birthday_day);
  const [selectedPrefecture, setSelectedPrefecture] = useState(userBasicInfo?.prefectures);
  const [mailAddress, setMailAddress] = useState(userBasicInfo?.mail);
  const [phoneNumber, setPhoneNumber] = useState(userBasicInfo?.tel);
  const [selectedCurrentSituation, setSelectedCurrentSituation] = useState(userBasicInfo?.current_situation);

  const onChangeUserFirstName = useCallback((e: ChangeEvent<HTMLInputElement>) => setUserFirstName(e.target.value), []);

  const onChangeUserLastName = useCallback((e: ChangeEvent<HTMLInputElement>) => setUserLastName(e.target.value), []);
  const onChangeUserFirstNameKana = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserFirstNameKana(e.target.value),
    []
  );
  const onChangeUserLastNameKana = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUserLastNameKana(e.target.value),
    []
  );

  const selectYear = (e: SelectChangeEvent<string>) => {
    setSelectedYear(e.target.value);
  };

  const selectMonth = (e: SelectChangeEvent<string>) => {
    setSelectedMonth(e.target.value);
  };

  const selectDay = (e: SelectChangeEvent<string>) => {
    setSelectedDay(e.target.value);
  };

  const onChangeMailAddress = useCallback((e: ChangeEvent<HTMLInputElement>) => setMailAddress(e.target.value), []);

  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value), []);

  useEffect(() => {
    setUserLastName(userBasicInfo?.last_name);
    setUserFirstName(userBasicInfo?.first_name);
    setUserFirstNameKana(userBasicInfo?.first_name_kana);
    setUserLastNameKana(userBasicInfo?.last_name_kana);
    setSelectedYear(userBasicInfo?.birthday_year);
    setSelectedMonth(userBasicInfo?.birthday_mounth);
    setSelectedDay(userBasicInfo?.birthday_day);
    setSelectedPrefecture(userBasicInfo?.prefectures);
    setMailAddress(userBasicInfo?.mail);
    setPhoneNumber(userBasicInfo?.tel);
    setSelectedCurrentSituation(userBasicInfo?.current_situation);
  }, [userBasicInfo]);

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
    selectedCurrentSituation,
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
    setSelectedCurrentSituation,
    setSelectedPrefecture,
  };
};
