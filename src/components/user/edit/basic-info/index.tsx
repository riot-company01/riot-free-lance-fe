import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Tag } from "../common/tag";
import { CurrentSituation } from "./current-situation";
import { useBasicInfo } from "./hooks/use-basic-info";
import * as Styles from "./styles";
import { SelectPrefecture } from "@/components/user/edit/basic-info/select-prefecture";
import { PATHS } from "@/const/paths";

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
            <h3>姓</h3>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <TextField
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
            <h3>名</h3>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
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
            <h3>せい</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
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
            <h3>めい</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
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
          <h3>生年月日</h3>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <div>
          <Select value={selectedYear} onChange={selectYear} style={{ width: "380px", marginRight: "32px" }}>
            {generateYearOptions()}
          </Select>

          <Select value={selectedMonth} onChange={selectMonth} style={{ width: "200px", marginRight: "32px" }}>
            {generateMonthDayOptions(12)}
          </Select>

          <Select value={selectedDay} onChange={selectDay} style={{ width: "200px" }}>
            {generateMonthDayOptions(31)}
          </Select>
        </div>
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <h3>メールアドレス</h3>
          <Tag isRequired />
        </Styles.DivTitleWrapper>

        <TextField
          variant="outlined"
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
          <h3>電話番号</h3>
          <Tag isRequired />
        </Styles.DivTitleWrapper>

        <TextField
          variant="outlined"
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
          <h3>お住まいの地域</h3>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <SelectPrefecture />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <h3>現在の状況</h3>
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
          style={{ height: "40px", width: "400px" }}
        >
          保存する
        </Button>
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
