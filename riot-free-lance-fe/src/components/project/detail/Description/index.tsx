import { GetDetailProjectQuery } from "@/lib/graphql/graphql";
import * as Styles from "./styles";

type Props = {
  projectDetailData: GetDetailProjectQuery["project"][0];
};

export const Description = ({ projectDetailData }: Props) => {
  const detailDescription = Object.fromEntries(
    Object.entries(projectDetailData).filter(([key, value]) => value !== null)
  );

  return (
    <Styles.DivDescriptionWrpper>
      {detailDescription.businessContent && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>業務内容</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.businessContent}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.developmentEnvironment && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>開発環境</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.developmentEnvironment}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.requiredSkills && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>必須スキル</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.requiredSkills}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.welcomeSkills && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>歓迎スキル</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.welcomeSkills}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.personnelSought && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>求める人材</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.personnelSought}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.workingConditions && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>稼働条件</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.workingConditions}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.recruitmentBackground && (
        <Styles.SecDescription>
          <Styles.HeadInfoTitle>募集背景</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.recruitmentBackground}</Styles.PerInfoDescription>
        </Styles.SecDescription>
      )}
      {detailDescription.contentBusiness && (
        <Styles.SecLastDescription>
          <Styles.HeadInfoTitle>事業内容</Styles.HeadInfoTitle>
          <Styles.PerInfoDescription>{detailDescription.contentBusiness}</Styles.PerInfoDescription>
        </Styles.SecLastDescription>
      )}
    </Styles.DivDescriptionWrpper>
  );
};
