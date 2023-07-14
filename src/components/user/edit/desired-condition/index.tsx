import { Button } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import {
  INDUSTRIES,
  MODE_OF_OPERATION,
  PROFESSIONAL_EXPERIENCES,
} from "@/components/user/edit/common/multi-select-items/mock";
import { SelectPrefecture } from "@/components/user/edit/common/select-prefecture";
import { SingleSelectItem } from "@/components/user/edit/common/single-select-item";
import { AMOUNT_OF_MONEY, AVAILABLE_DAYS, COMMUTING_TIME } from "@/components/user/edit/common/single-select-item/mock";
import { Tag } from "@/components/user/edit/common/tag";
import { DesiredSkill } from "@/components/user/edit/desired-condition/desired-skill";
import { useDesiredCondition } from "@/components/user/edit/desired-condition/hooks/use-desired-condition";
import { OperationStartDate } from "@/components/user/edit/desired-condition/operation-start-date";
import { PATHS } from "@/const/paths";

export const DesiredCondition = () => {
  const { push } = useRouter();
  const {
    selectedPrefecture,
    selectedCommutingTime,
    selectedAmountOfMoney,
    selectedAvailableDays,
    selectedProfessionalExperiences,
    selectedOperationStartDate,
    selectedYear,
    selectedMonth,
    selectedIndustries,
    selectedModeOfOperation,
    selectedDesiredSkills,
    setSelectedOperationStartDate,
    setSelectedYear,
    setSelectedMonth,
    setSelectedPrefecture,
    setSelectedCommutingTime,
    setSelectedAmountOfMoney,
    setSelectedAvailableDays,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedModeOfOperation,
    setSelectedDesiredSkills,
  } = useDesiredCondition();

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
          <SingleSelectItem
            data={COMMUTING_TIME}
            name={"CommutingTime"}
            selectedStyle={{ height: "48px", width: "460px", margin: "4px", background: "#2c345c" }}
            notSelectedStyle={{
              height: "48px",
              width: "460px",
              margin: "4px",
              border: "1px solid #a1a1a1",
              color: "#a1a1a1",
            }}
            selectedOption={selectedCommutingTime}
            setSelectedOption={setSelectedCommutingTime}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>金額</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <SingleSelectItem
            data={AMOUNT_OF_MONEY}
            name={"AmountOfMoney"}
            selectedStyle={{ height: "48px", width: "460px", margin: "4px", background: "#2c345c" }}
            notSelectedStyle={{
              height: "48px",
              width: "460px",
              margin: "4px",
              border: "1px solid #a1a1a1",
              color: "#a1a1a1",
            }}
            selectedOption={selectedAmountOfMoney}
            setSelectedOption={setSelectedAmountOfMoney}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>勤務希望地</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <SelectPrefecture selectedPrefecture={selectedPrefecture} setSelectedPrefecture={setSelectedPrefecture} />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望職種</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <MultiSelectItems
            data={PROFESSIONAL_EXPERIENCES}
            name={"ProfessionalExperience"}
            selectedStyle={{ height: "48px", width: "150px", margin: "4px", background: "#2c345c" }}
            notSelectedStyle={{
              height: "48px",
              width: "150px",
              margin: "4px",
              border: "1px solid #a1a1a1",
              color: "#a1a1a1",
            }}
            selectedOptions={selectedProfessionalExperiences}
            setSelectedOptions={setSelectedProfessionalExperiences}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望業界</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <MultiSelectItems
            data={INDUSTRIES}
            name={"Industries"}
            selectedStyle={{ height: "48px", width: "150px", margin: "4px", background: "#2c345c" }}
            notSelectedStyle={{
              height: "48px",
              width: "150px",
              margin: "4px",
              border: "1px solid #a1a1a1",
              color: "#a1a1a1",
            }}
            selectedOptions={selectedIndustries}
            setSelectedOptions={setSelectedIndustries}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望する開発環境・スキル</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <DesiredSkill
            selectedDesiredSkills={selectedDesiredSkills}
            setSelectedDesiredSkills={setSelectedDesiredSkills}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>希望稼働形態</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>

          <MultiSelectItems
            data={MODE_OF_OPERATION}
            name={"ModeOfOperation"}
            selectedStyle={{ height: "48px", width: "460px", margin: "4px", background: "#2c345c" }}
            notSelectedStyle={{
              height: "48px",
              width: "460px",
              margin: "4px",
              border: "1px solid #a1a1a1",
              color: "#a1a1a1",
            }}
            selectedOptions={selectedModeOfOperation}
            setSelectedOptions={setSelectedModeOfOperation}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>可能稼働日数/週</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <SingleSelectItem
            data={AVAILABLE_DAYS}
            name={"AvailableDays"}
            selectedStyle={{ height: "48px", width: "460px", margin: "4px", background: "#2c345c" }}
            notSelectedStyle={{
              height: "48px",
              width: "460px",
              margin: "4px",
              border: "1px solid #a1a1a1",
              color: "#a1a1a1",
            }}
            selectedOption={selectedAvailableDays}
            setSelectedOption={setSelectedAvailableDays}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>案件開始可能時期</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <OperationStartDate
            selectedOption={selectedOperationStartDate}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            setSelectedOption={setSelectedOperationStartDate}
            setSelectedYear={setSelectedYear}
            setSelectedMonth={setSelectedMonth}
          />
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
