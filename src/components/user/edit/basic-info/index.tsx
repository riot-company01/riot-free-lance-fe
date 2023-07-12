import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { Tag } from "../common/tag";
import { CurrentSituation } from "./current-situation";
import { useBasicInfo } from "./hooks/use-basic-info";
import SelectPrefecture from "./select-prefecture";
import * as Styles from "./styles";
import { Input } from "@/components/common/input";
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
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return years;
  };

  const generateMonthOptions = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
      months.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return months;
  };

  const generateDayOptions = () => {
    const days = [];

    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return days;
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
          <Input
            type="text"
            name="userLastName"
            value={userLastName}
            placeholder="例：田中"
            width={"458px"}
            onChange={onChangeUserLastName}
          />
        </Styles.DivItemWrapper>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>名</h3>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <Input
            type="text"
            name="userFirstName"
            value={userFirstName}
            placeholder="例：太郎"
            width={"458px"}
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
          <Input
            type="text"
            name="userLastName"
            value={userLastNameKana}
            placeholder="例：たなか"
            width={"458px"}
            onChange={onChangeUserLastNameKana}
          />
        </Styles.DivItemWrapper>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>めい</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Input
            type="text"
            name="userFirstName"
            value={userFirstNameKana}
            placeholder="例：たろう"
            width={"458px"}
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
          <Styles.SelectYear value={selectedYear} onChange={selectYear}>
            <option value="">選択してください</option>
            {generateYearOptions()}
          </Styles.SelectYear>

          <Styles.SelectMounthDay value={selectedMonth} onChange={selectMonth}>
            <option value="">選択してください</option>
            {generateMonthOptions()}
          </Styles.SelectMounthDay>

          <Styles.SelectMounthDay value={selectedDay} onChange={selectDay}>
            <option value="">選択してください</option>
            {generateDayOptions()}
          </Styles.SelectMounthDay>
        </div>
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <h3>メールアドレス</h3>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <Input
          type="text"
          name="mailAddres"
          value={mailAddress}
          placeholder={user?.email ? user?.email : ""}
          width={"458px"}
          onChange={onChangeMailAddress}
        />
      </Styles.DivWrpper>
      <Styles.DivWrpper>
        <Styles.DivTitleWrapper>
          <h3>電話番号</h3>
          <Tag isRequired />
        </Styles.DivTitleWrapper>
        <Input
          type="text"
          name="tell"
          value={phoneNumber}
          placeholder={"080xxxxxxxx"}
          width={"458px"}
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
        <Styles.CancelButtonWrapper name="selectedFreeLanceButton" onClick={() => handleCancelButtonClick()}>
          <Styles.ParCancelText>キャンセル</Styles.ParCancelText>
        </Styles.CancelButtonWrapper>
        <Styles.KeepButtonWrapper name="selectedFreeLanceButton" onClick={() => handleKeepButtonClick()}>
          <Styles.ParKeepText>保存する</Styles.ParKeepText>
        </Styles.KeepButtonWrapper>
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
