import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import type { UserProfile } from "@auth0/nextjs-auth0/client";
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Tag } from "@/components/profile/tag";
import { useProfile } from "@/components/profile/hooks/use-profile";
import { EditProfileDocument, GetProfileQuery } from "@/lib/graphql/graphql";

type Args = {
  userInfo?: UserProfile;
  userData?: GetProfileQuery;
};

export const BasicProfile = (args: Args) => {
  const { userInfo, userData } = args;
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
    setUserFirstName,
    setUserLastName,
    setUserFirstNameKana,
    setUserLastNameKana,
    setSelectedYear,
    setSelectedMonth,
    setSelectedDay,
    setMailAddress,
    setPhoneNumber,
    onChangeUserFirstName,
    onChangeUserLastName,
    onChangeUserFirstNameKana,
    onChangeUserLastNameKana,
    selectYear,
    selectMonth,
    selectDay,
    onChangeMailAddress,
    onChangePhoneNumber,
  } = useProfile(userData);

  const [editProfileMutation] = useMutation(EditProfileDocument);

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
    setUserFirstName(userData?.users[0].first_name);
    setUserLastName(userData?.users[0].last_name);
    setUserFirstNameKana(userData?.users[0].first_name_kana);
    setUserLastNameKana(userData?.users[0].last_name_kana);
    setSelectedYear(userData?.users[0].birthday_year);
    setSelectedMonth(userData?.users[0].birthday_mounth);
    setSelectedDay(userData?.users[0].birthday_day);
    setMailAddress(userData?.users[0].mail);
    setPhoneNumber(userData?.users[0].tel);
    push("/user/profile");
  };

  const handleKeepButtonClick = async () => {
    await editProfileMutation({
      variables: {
        id: userInfo?.sub || "",
        lastName: userLastName || "",
        firstName: userFirstName || "",
        lastNameKana: userLastNameKana || "",
        firstNameKana: userFirstNameKana || "",
        birthdayYear: String(selectedYear) || "",
        birthdayMounth: String(selectedMonth) || "",
        birthdayDay: String(selectedDay) || "",
        mail: mailAddress || "",
        tel: phoneNumber || "",
      },
    });
    push("/user/profile");
  };

  return (
    <DivEditBasicInfoWrapper>
      <HeadTitle>基本情報</HeadTitle>
      <DivItem>
        <DivItemWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>姓</HeadContentTitle>
            <Tag isRequired />
          </DivTitleWrapper>
          <TextField
            variant="outlined"
            name="userFirstName"
            value={userLastName}
            placeholder="例:田中"
            onChange={onChangeUserLastName}
          />
        </DivItemWrapper>
        <DivItemWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>名</HeadContentTitle>
            <Tag isRequired />
          </DivTitleWrapper>
          <TextField
            variant="outlined"
            name="userFirstName"
            value={userFirstName}
            placeholder="例：太郎"
            onChange={onChangeUserFirstName}
          />
        </DivItemWrapper>
      </DivItem>
      <DivItem>
        <DivItemWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>せい</HeadContentTitle>
            <Tag isRequired={false} />
          </DivTitleWrapper>
          <TextField
            variant="outlined"
            type="text"
            name="userLastName"
            value={userLastNameKana}
            placeholder="例：たなか"
            onChange={onChangeUserLastNameKana}
          />
        </DivItemWrapper>
        <DivItemWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>めい</HeadContentTitle>
            <Tag isRequired={false} />
          </DivTitleWrapper>
          <TextField
            variant="outlined"
            type="text"
            name="userFirstName"
            value={userFirstNameKana}
            placeholder="例：たろう"
            onChange={onChangeUserFirstNameKana}
          />
        </DivItemWrapper>
      </DivItem>
      <DivWrpper>
        <DivTitleWrapper>
          <HeadContentTitle>生年月日</HeadContentTitle>
          <Tag isRequired />
        </DivTitleWrapper>
        <div>
          <FormControl variant="outlined">
            <Select value={selectedYear || ""} onChange={selectYear}>
              {generateYearOptions()}
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <Select value={selectedMonth || ""} onChange={selectMonth}>
              {generateMonthDayOptions(12)}
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <Select value={selectedDay || ""} onChange={selectDay}>
              {generateMonthDayOptions(31)}
            </Select>
          </FormControl>
        </div>
      </DivWrpper>
      <DivWrpper>
        <DivTitleWrapper>
          <HeadContentTitle>メールアドレス</HeadContentTitle>
          <Tag isRequired />
        </DivTitleWrapper>

        <TextField
          variant="outlined"
          type="text"
          name="mailAddres"
          value={mailAddress}
          placeholder={userInfo?.email ? userInfo?.email : ""}
          onChange={onChangeMailAddress}
        />
      </DivWrpper>
      <DivWrpper>
        <DivTitleWrapper>
          <HeadContentTitle>電話番号</HeadContentTitle>
          <Tag isRequired />
        </DivTitleWrapper>

        <TextField
          variant="outlined"
          type="tel"
          name="phone"
          value={phoneNumber}
          placeholder={"080xxxxxxxx"}
          onChange={onChangePhoneNumber}
        />
      </DivWrpper>

      <DivButtonWrapper>
        <Button variant="outlined" onClick={handleCancelButtonClick}>
          キャンセル
        </Button>

        <Button variant="contained" onClick={handleKeepButtonClick}>
          保存する
        </Button>
      </DivButtonWrapper>
    </DivEditBasicInfoWrapper>
  );
};

export const DivEditBasicInfoWrapper = styled.div`
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeadTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const DivItem = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const DivItemWrapper = styled.div`
  padding: 0 16px 0 16px;
`;

export const DivTitleWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
`;

export const HeadContentTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const DivWrpper = styled.div`
  margin-top: 32px;
  padding: 0 16px 0 16px;
`;

export const DivButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px 0;
`;
