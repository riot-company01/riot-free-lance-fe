import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link, TextareaAutosize, TextField } from "@mui/material";
import { useRouter } from "next/router";
import * as Styles from "./styles";
import { Button } from "@/components/common/button";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { PROFESSIONAL_EXPERIENCES, INDUSTRIES } from "@/components/user/edit/common/multi-select-items/mock";
import { Tag } from "@/components/user/edit/common/tag";
import { myStyle } from "@/components/user/edit/const";
import { FrameWork } from "@/components/user/edit/skill/frame-work";
import { useEditSkill } from "@/components/user/edit/skill/hooks/use-edit-skill";
import { LanguageLibraries } from "@/components/user/edit/skill/language-libraries";
import { FileUpload } from "@/components/user/profile/common/file-upload";
import { PATHS } from "@/const/paths";
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
    uploadFileName,
    uploadFilePath,
    setSelectedProfessionalExperiences,
    setSelectedIndustries,
    setSelectedFrameWorks,
    setSelectedLanguageLibralies,
    onChangePortfolio,
    onChangeTextArea,
    onChangeUploadFileName,
  } = useEditSkill(data);

  const [editSkillInfoMutation] = useMutation(EditSkillInfoDocument);

  const handleCancelButtonClick = () => {
    push(PATHS.PROFILE);
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
        fileTitle: uploadFileName,
        filePath: uploadFilePath,
      },
    }),
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
            {portfolio && (
              <Styles.DivPortfoliLink>
                <Link href={portfolio}>{portfolio}</Link>
                <LaunchIcon sx={{ fontSize: "24px" }} />
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
          <FileUpload onChange={onChangeUploadFileName} />
          {uploadFileName && <Styles.PerUploadFile>{uploadFileName}</Styles.PerUploadFile>}
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
