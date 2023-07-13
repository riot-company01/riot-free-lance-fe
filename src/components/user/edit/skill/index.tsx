import { Button, TextareaAutosize, TextField } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { Tag } from "@/components/user/edit/common/tag";
import { FrameWork } from "@/components/user/edit/skill/frame-work";
import { useEditSkill } from "@/components/user/edit/skill/hooks/use-edit-skill";
import { Industry } from "@/components/user/edit/skill/industry";
import { LanguageLibrary } from "@/components/user/edit/skill/language-library";
import { ProfessionalExperience } from "@/components/user/edit/skill/professional-experience";
import { FileUpload } from "@/components/user/profile/common/file-upload";
import { PATHS } from "@/const/paths";
import { myStyle } from "@/components/user/edit/const";

export const EditSkill = () => {
  const { push } = useRouter();
  const { portfolio, textArea, uploadFile, onChangePortfolio, onChangeTextArea, onChangeUploadFile } = useEditSkill();

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
            <Styles.HeadContentTitle>経験職種</Styles.HeadContentTitle>
            <Tag isRequired />
          </Styles.DivTitleWrapper>
          <ProfessionalExperience />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>経験業界</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Industry />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>開発言語・ライブラリ</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <LanguageLibrary />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>フレームワーク</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <FrameWork />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>ポートフォリオ・GitHub</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextField
            variant="outlined"
            sx={myStyle}
            name="portfolio"
            value={portfolio}
            placeholder="https://github.com/"
            style={{ width: "458px" }}
            onChange={onChangePortfolio}
          />
          {portfolioUrl && <Styles.DivWrpper>{portfolioUrl}</Styles.DivWrpper>}
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>自己PR</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <TextareaAutosize
            minRows={3}
            maxRows={6}
            value={textArea}
            onChange={onChangeTextArea}
            style={{
              width: "945px",
              height: "250px",
              padding: "16px",
              border: "1px solid #a1a1a1",
              borderRadius: "8px",
            }}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>経歴書</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <FileUpload onChange={onChangeUploadFile} />
          {uploadFile && <Styles.PerUploadFile>{uploadFile.name}</Styles.PerUploadFile>}
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
