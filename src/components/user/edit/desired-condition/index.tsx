import { useRouter } from "next/router";
import * as Styles from "./styles";
import { Tag } from "@/components/user/edit/common/tag";
import { AmountOfMoney } from "@/components/user/edit/desired-condition/amount-of-money";
import { CommutingTime } from "@/components/user/edit/desired-condition/commuting-time";
import { Industry } from "@/components/user/edit/desired-condition/industry";
import { ProfessionalExperience } from "@/components/user/edit/desired-condition/professional-experience";
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
            <h3>通勤時間</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <CommutingTime />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>金額</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <AmountOfMoney />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>勤務希望地</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          {/* <SelectPrefecture value={selectedPrefecture} onChange={selectPrefecture} /> */}
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>希望職種</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <ProfessionalExperience />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>希望業界</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Industry />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>希望する開発環境・スキル</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          {/* //TODO  */}
          {/* クリックしたら、モーダル開く、開いたモーダルでスキル系を選択、この条件で希望するボタンをクリックしたら選択していたもの全部がタブで反映するようにしたい */}
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>希望稼働形態</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Industry />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

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
