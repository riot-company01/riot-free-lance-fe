import { Button } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { Tag } from "@/components/user/edit/common/tag";
import { AmountOfMoney } from "@/components/user/edit/desired-condition/amount-of-money";
import { AvailableDays } from "@/components/user/edit/desired-condition/available-days";
import { CommutingTime } from "@/components/user/edit/desired-condition/commuting-time";
import { DesiredSkill } from "@/components/user/edit/desired-condition/desired-skill";
import { Industry } from "@/components/user/edit/desired-condition/industry";
import { ModeOfOperation } from "@/components/user/edit/desired-condition/mode-of-operation";
import { OperationStartDate } from "@/components/user/edit/desired-condition/operation-start-date";
import { ProfessionalExperience } from "@/components/user/edit/desired-condition/professional-experience";
import { SelectPrefecture } from "@/components/user/edit/desired-condition/select-prefecture";
import { PATHS } from "@/const/paths";

export const DesiredCondition = () => {
  const { push } = useRouter();

  const handleCancelButtonClick = () => {
    push(PATHS.PROFILE);
  };

  const handleKeepButtonClick = () => {
    push(PATHS.PROFILE);
  };

  return (
    <Styles.DivEditBasicInfoWrapper>
      <Styles.HeadTitle>希望条件</Styles.HeadTitle>
      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>通勤時間</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <CommutingTime />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>金額</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <AmountOfMoney />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>勤務希望地</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <SelectPrefecture />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望職種</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <ProfessionalExperience />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望業界</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Industry />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望する開発環境・スキル</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <DesiredSkill />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望稼働形態</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <ModeOfOperation />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>可能稼働日数/週</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <AvailableDays />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>案件開始可能時期</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <OperationStartDate />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

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
