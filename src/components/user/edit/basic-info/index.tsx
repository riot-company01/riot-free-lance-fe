import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Tag } from "../common/tag";
import { CurrentSituation } from "./current-situation";
import { useBasicInfo } from "./hooks/use-basic-info";
import * as Styles from "./styles";
import { SelectPrefecture } from "@/components/user/edit/basic-info/select-prefecture";
import { PATHS } from "@/const/paths";
import { myStyle, selectMyStyle } from "@/components/user/edit/const";

export const EditBasicInfo = () => {
  const { user } = useUser();
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
    onChangeUserFirstName,
    onChangeUserLastName,
    onChangeUserFirstNameKana,
    onChangeUserLastNameKana,
    selectYear,
    selectMonth,
    selectDay,
    onChangeMailAddress,
    onChangePhoneNumber,
  } = useBasicInfo();

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
    push(PATHS.PROFILE);
  };

  const handleKeepButtonClick = () => {
    push(PATHS.PROFILE);
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
            style={{ width: "458px" }}
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
            style={{ width: "458px" }}
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
            style={{ width: "458px" }}
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
            style={{ width: "458px" }}
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
          <FormControl sx={selectMyStyle} variant="outlined" style={{ width: "380px", marginRight: "32px" }}>
            <Select value={selectedYear} onChange={selectYear}>
              {generateYearOptions()}
            </Select>
          </FormControl>
          <FormControl sx={selectMyStyle} variant="outlined" style={{ width: "200px", marginRight: "32px" }}>
            <Select value={selectedMonth} onChange={selectMonth}>
              {generateMonthDayOptions(12)}
            </Select>
          </FormControl>

          <FormControl sx={selectMyStyle} variant="outlined" style={{ width: "200px" }}>
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
          style={{ width: "458px" }}
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
          style={{ width: "458px" }}
          onChange={onChangePhoneNumber}
        />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>お住まいの地域</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <SelectPrefecture />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <Styles.HeadContentTitle>現在の状況</Styles.HeadContentTitle>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <CurrentSituation />
      </Styles.DivWrpper>
      <Styles.DivButtonWrapper>
        <Button
          variant="outlined"
          name="cancelButton"
          onClick={() => handleCancelButtonClick()}
          style={{ height: "40px", width: "400px", border: "1px solid #a1a1a1", color: "#a1a1a1" }}
        >
          キャンセル
        </Button>

        <Button
          variant="contained"
          name="keepButton"
          onClick={() => handleKeepButtonClick()}
          style={{ height: "40px", width: "400px", background: "#2c345c" }}
        >
          保存する
        </Button>
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
