import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Link, TextareaAutosize, TextField } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { PROFESSIONAL_EXPERIENCES, INDUSTRIES } from "@/components/user/edit/common/multi-select-items/mock";
import { Tag } from "@/components/user/edit/common/tag";
import { myStyle } from "@/components/user/edit/const";
import { FrameWork } from "@/components/user/edit/skill/frame-work";
import { useEditSkill } from "@/components/user/edit/skill/hooks/use-edit-skill";
import { LanguageLibraries } from "@/components/user/edit/skill/language-libraries";
import { FileUpload } from "@/components/user/profile/common/file-upload";
import { PATHS } from "@/const/paths";

export const EditSkill = () => {
  const { push } = useRouter();
  const {
    selectedProfessionalExperiences,
    selectedIndustries,
    selectedFrameWorks,
    selectedLanguageLibralies,
    portfolio,
    textArea,
    uploadFile,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedFrameWorks,
    setSelectedLanguageLibralies,
    onChangePortfolio,
    onChangeTextArea,
    onChangeUploadFile,
  } = useEditSkill();

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
            <Styles.HeadContentTitle>経験業界</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <MultiSelectItems
            data={INDUSTRIES}
            name={"Industrie"}
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
            <Styles.HeadContentTitle>開発言語・ライブラリ</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <LanguageLibraries
            selectedOptions={selectedLanguageLibralies}
            setSelectedOptions={setSelectedLanguageLibralies}
          />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>フレームワーク</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <FrameWork selectedOptions={selectedFrameWorks} setSelectedOptions={setSelectedFrameWorks} />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivItem>
        <Styles.DivItemWrapper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>ポートフォリオ・GitHub</Styles.HeadContentTitle>
            <Tag isRequired={false} />
          </Styles.DivTitleWrapper>
          <Styles.DivPortfolioWrapper>
            <TextField
              variant="outlined"
              sx={myStyle}
              name="portfolio"
              value={portfolio}
              placeholder="https://github.com/"
              style={{ width: "458px" }}
              onChange={onChangePortfolio}
            />
            {portfolioUrl && (
              <Styles.DivPortfoliLink>
                <Link href={portfolioUrl}>{portfolioUrl}</Link>
                <LaunchIcon style={{ fontSize: "24px" }} />
              </Styles.DivPortfoliLink>
            )}
          </Styles.DivPortfolioWrapper>
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
