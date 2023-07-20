import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { Button } from "@/components/common/button";
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
import {
  EditDesiredConditionDocument,
  GetUserDesiredConditionDocument,
  UseEditBasicInfoDocument,
} from "@/lib/graphql/graphql";
import type { GetUserDesiredConditionQuery, GetUserDesiredConditionQueryVariables } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

export const DesiredCondition = () => {
  const { push } = useRouter();
  const { user } = useUser();
  const { data } = useQuery<GetUserDesiredConditionQuery, GetUserDesiredConditionQueryVariables>(
    GetUserDesiredConditionDocument,
    {
      variables: { id: user?.sub },
    }
  );
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
  } = useDesiredCondition(data);

  const [editDesiredConditionMutation] = useMutation(EditDesiredConditionDocument);

  const handleCancelButtonClick = () => {
    push(PATHS.PROFILE);
  };

  const handleKeepButtonClick = async () => {
    await editDesiredConditionMutation({
      variables: {
        id: user?.sub || "",
        commutingTime: selectedCommutingTime,
        amountOfMoney: selectedAmountOfMoney,
        preferredPlaceOfWork: selectedPrefecture,
        desiredOccupation: selectedProfessionalExperiences,
        desiredIndustries: selectedIndustries,
        desiredSkills: selectedDesiredSkills,
        modeOfOperation: selectedModeOfOperation,
        availableDay: selectedAvailableDays,
        projectStartTime: selectedOperationStartDate,
        projectStartYear: String(selectedYear),
        projectStartMounth: String(selectedMonth),
      },
    });
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
            width={460}
            selectedOption={selectedCommutingTime || ""}
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
            width={460}
            selectedOption={selectedAmountOfMoney || ""}
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
          <SelectPrefecture
            selectedPrefecture={selectedPrefecture || ""}
            setSelectedPrefecture={setSelectedPrefecture}
          />
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
            width={150}
            selectedOptions={selectedProfessionalExperiences || []}
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
            name={"desiredIndustries"}
            width={150}
            selectedOptions={selectedIndustries || []}
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
            selectedDesiredSkills={selectedDesiredSkills || []}
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
            width={460}
            selectedOptions={selectedModeOfOperation || []}
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
            width={460}
            selectedOption={selectedAvailableDays || ""}
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
            selectedOption={selectedOperationStartDate || ""}
            selectedYear={selectedYear || ""}
            selectedMonth={selectedMonth || ""}
            setSelectedOption={setSelectedOperationStartDate}
            setSelectedYear={setSelectedYear}
            setSelectedMonth={setSelectedMonth}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivButtonWrapper>
        <Button
          text="キャンセル"
          width={400}
          borderColor={COLOR.LIGHT_GRAY.code}
          backGround={COLOR.WHITE.code}
          fontColor={COLOR.LIGHT_GRAY.code}
          onClick={handleCancelButtonClick}
        />
        <Button
          text="保存する"
          width={400}
          backGround={COLOR.BASE_COLOR.code}
          fontColor={COLOR.WHITE.code}
          onClick={handleKeepButtonClick}
        />
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
