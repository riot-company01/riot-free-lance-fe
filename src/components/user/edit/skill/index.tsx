import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { PROFESSIONAL_EXPERIENCES, INDUSTRIES } from "@/components/user/edit/common/multi-select-items/mock";
import { Tag } from "@/components/user/edit/common/tag";
import { myStyle } from "@/components/user/edit/const";
import { FrameWork } from "@/components/user/edit/skill/frame-work";
import { useEditSkill } from "@/components/user/edit/skill/hooks/use-edit-skill";
import { LanguageLibraries } from "@/components/user/edit/skill/language-libraries";
import FileUploadDownloadComponent from "@/components/user/profile/common/file-upload-download";
import { EditSkillInfoDocument, GetUserSkillDocument } from "@/lib/graphql/graphql";
import type { GetUserSkillQuery, GetUserSkillQueryVariables } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

export const EditSkill = () => {
  const { push } = useRouter();
  const { user } = useUser();
  const { data } = useQuery<GetUserSkillQuery, GetUserSkillQueryVariables>(GetUserSkillDocument, {
    variables: { id: user?.sub },
  });
  const {
    selectedProfessionalExperiences,
    selectedIndustries,
    selectedFrameWorks,
    selectedLanguageLibralies,
    portfolio,
    textArea,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedFrameWorks,
    setSelectedLanguageLibralies,
    onChangePortfolio,
    onChangeTextArea,
  } = useEditSkill(data);

  const [editSkillInfoMutation] = useMutation(EditSkillInfoDocument);

  const handleCancelButtonClick = () => {
    push("/user/profile");
  };

  const handleKeepButtonClick = async () => {
    await editSkillInfoMutation({
      variables: {
        id: user?.sub || "",
        professionalExperience: selectedProfessionalExperiences,
        industries: selectedIndustries,
        languageLibraries: selectedLanguageLibralies,
        frameWork: selectedFrameWorks,
        portfolio,
        selfPr: textArea,
      },
    }),
      push("/user/profile");
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
            width={150}
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
            width={150}
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
              onChange={onChangePortfolio}
            />
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
              border: `1px solid ${COLOR.LIGHT_GRAY.code}`,
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

          <FileUploadDownloadComponent />
        </Styles.DivItemWrapper>
      </Styles.DivItem>

      <Styles.DivButtonWrapper>
        <Button variant="outlined" onClick={handleCancelButtonClick}>
          キャンセル
        </Button>

        <Button variant="contained" onClick={handleKeepButtonClick}>
          保存する
        </Button>
      </Styles.DivButtonWrapper>
    </Styles.DivEditBasicInfoWrapper>
  );
};
