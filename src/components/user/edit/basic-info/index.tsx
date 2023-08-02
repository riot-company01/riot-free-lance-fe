import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Tag } from "../common/tag";
import { useBasicInfo } from "./hooks/use-basic-info";
import * as Styles from "./styles";
import { SelectPrefecture } from "@/components/user/edit/common/select-prefecture";
import { SingleSelectItem } from "@/components/user/edit/common/single-select-item";
import { CURRENT_SITUATION } from "@/components/user/edit/common/single-select-item/mock";
import { myStyle, selectBigStyle, selectSmallStyle } from "@/components/user/edit/const";
import { GetUserBasicInfoDocument, UseEditBasicInfoDocument } from "@/lib/graphql/graphql";
import type { GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables } from "@/lib/graphql/graphql";

export const EditBasicInfo = () => {
  const { user } = useUser();
  const { data } = useQuery<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>(GetUserBasicInfoDocument, {
    variables: { id: user?.sub },
  });
  const { push } = useRouter();

  const {
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
  } = useBasicInfo(data);

  const [editProfileMutation] = useMutation(UseEditBasicInfoDocument);

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return years;
  };

  const generateMonthDayOptions = (mounthDay: number) => {
    const months = [];

    for (let i = 1; i <= mounthDay; i++) {
      months.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    return months;
  };

  const handleCancelButtonClick = () => {
    push("/user/profile");
  };

  const handleKeepButtonClick = async () => {
    await editProfileMutation({
      variables: {
        id: user?.sub || "",
        lastName: userLastName || "",
        firstName: userFirstName || "",
        lastNameKana: userLastNameKana || "",
        firstNameKana: userFirstNameKana || "",
        birthdayYear: String(selectedYear) || "",
        birthdayMounth: String(selectedMonth) || "",
        birthdayDay: String(selectedDay) || "",
        mail: mailAddress || "",
        tel: phoneNumber || "",
        prefectures: selectedPrefecture || "",
        currentSituation: selectedCurrentSituation || "",
      },
    });
    push("/user/profile");
  };

  return (
    <Styles.DivEditBasicInfoWrapper>
      <Styles.HeadTitle>基本情報</Styles.HeadTitle>
      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>姓</Styles.HeadContentTitle>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <TextField
            sx={myStyle}
            variant="outlined"
            name="userFirstName"
            value={userLastName}
            placeholder="例:田中"
            onChange={onChangeUserLastName}
          />
        </Styles.DivItemWrapper>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>名</Styles.HeadContentTitle>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
            sx={myStyle}
            name="userFirstName"
            value={userFirstName}
            placeholder="例：太郎"
            onChange={onChangeUserFirstName}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>
      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>せい</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
            sx={myStyle}
            type="text"
            name="userLastName"
            value={userLastNameKana}
            placeholder="例：たなか"
            onChange={onChangeUserLastNameKana}
          />
        </Styles.DivItemWrapper>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>めい</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
            sx={myStyle}
            type="text"
            name="userFirstName"
            value={userFirstNameKana}
            placeholder="例：たろう"
            onChange={onChangeUserFirstNameKana}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>生年月日</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <div>
          <FormControl sx={selectBigStyle} variant="outlined">
            <Select value={selectedYear} onChange={selectYear}>
              {generateYearOptions()}
            </Select>
          </FormControl>
          <FormControl sx={selectSmallStyle} variant="outlined">
            <Select value={selectedMonth} onChange={selectMonth}>
              {generateMonthDayOptions(12)}
            </Select>
          </FormControl>

          <FormControl sx={selectSmallStyle} variant="outlined">
            <Select value={selectedDay} onChange={selectDay}>
              {generateMonthDayOptions(31)}
            </Select>
          </FormControl>
        </div>
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>メールアドレス</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>

        <TextField
          variant="outlined"
          sx={myStyle}
          type="text"
          name="mailAddres"
          value={mailAddress}
          placeholder={user?.email ? user?.email : ""}
          onChange={onChangeMailAddress}
        />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>電話番号</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>

        <TextField
          variant="outlined"
          sx={myStyle}
          type="tel"
          name="phone"
          value={phoneNumber}
          placeholder={"080xxxxxxxx"}
          onChange={onChangePhoneNumber}
        />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>お住まいの地域</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <SelectPrefecture selectedPrefecture={selectedPrefecture} setSelectedPrefecture={setSelectedPrefecture} />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>現在の状況</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <SingleSelectItem
          data={CURRENT_SITUATION}
          name={"CurrentSistuation"}
          width={460}
          selectedOption={selectedCurrentSituation}
          setSelectedOption={setSelectedCurrentSituation}
        />
      </Styles.DivWrpper>
      <Styles.DivButtonWrapper>
        <Button variant="outlined" onClick={handleCancelButtonClick}>
          キャンセル
        </Button>

        <Button variant="contained" onClick={handleKeepButtonClick}>
          保存する
        </Button>
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
