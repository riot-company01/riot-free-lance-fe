import * as Styles from "./styles";
import type { GetDetailProjectQuery } from "@/lib/graphql/graphql";

type Props = {
  projectDetailData: GetDetailProjectQuery["project"][0];
};

export const Description = ({ projectDetailData }: Props) => {
  const detailDescription = Object.fromEntries(
    // eslint-disable-next-line unused-imports/no-unused-vars
    Object.entries(projectDetailData).filter(([key, value]) => value !== null)
  );

  return (
    <Styles.DivDescriptionWrpper>
      {detailDescription.businessContent && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>業務内容</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.businessContent }} />
        </Styles.SecDescription>
      )}
      {detailDescription.developmentEnvironment && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>開発環境</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.developmentEnvironment }} />
        </Styles.SecDescription>
      )}
      {detailDescription.requiredSkills && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>必須スキル</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.requiredSkills }} />
        </Styles.SecDescription>
      )}
      {detailDescription.welcomeSkills && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>歓迎スキル</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.welcomeSkills }} />
        </Styles.SecDescription>
      )}
      {detailDescription.personnelSought && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>求める人材</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.personnelSought }} />
        </Styles.SecDescription>
      )}
      {detailDescription.workingConditions && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>稼働条件</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.workingConditions }} />
        </Styles.SecDescription>
      )}
      {detailDescription.recruitmentBackground && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>募集背景</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.recruitmentBackground }} />
        </Styles.SecDescription>
      )}
      {detailDescription.contentBusiness && (
        <Styles.SecLastDescription>
          <Styles.HeadInfoTitle>事業内容</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription dangerouslySetInnerHTML={{ __html: detailDescription.contentBusiness }} />
        </Styles.SecLastDescription>
      )}
    </Styles.DivDescriptionWrpper>
  );
};
