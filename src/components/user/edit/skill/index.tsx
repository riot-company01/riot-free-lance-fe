import { TextareaAutosize } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { Input } from "@/components/common/input";
import { Tag } from "@/components/user/edit/common/tag";
import { useEditSkill } from "@/components/user/edit/skill/hooks/use-edit-skill";
import { Industry } from "@/components/user/edit/skill/industry";
import { ProfessionalExperience } from "@/components/user/edit/skill/professional-experience";
import { PATHS } from "@/const/paths";

export const EditSkill = () => {
  const { push } = useRouter();
  const { portfolio, textArea, onChangePortfolio, onChangeTextArea } = useEditSkill();

  const portfolioUrl = "http://localhost:3000/user/edit-skill";

  const handleCancelButtonClick = () => {
    push(PATHS.PROFILE);
  };

  const handleKeepButtonClick = () => {
    push(PATHS.PROFILE);
  };

  return (
    <Styles.DivEditBasicInfoWrapper>
      <Styles.HeadTitle>スキル・経験</Styles.HeadTitle>
      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>経験職種</h3>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <ProfessionalExperience />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>経験業界</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Industry />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>言語</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>フレームワーク</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Industry />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>ポートフォリオ・GitHub</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Input
            type="text"
            name="portfolio"
            value={portfolio}
            placeholder="https://github.com/"
            width={"458px"}
            onChange={onChangePortfolio}
          />
          {portfolioUrl && portfolioUrl}
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>自己PR</h3>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextareaAutosize
            minRows={3} // 最小の行数
            maxRows={6} // 最大の行数
            value={textArea}
            onChange={onChangeTextArea}
            style={{ width: "100%" }}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <h3>経歴書</h3>
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
