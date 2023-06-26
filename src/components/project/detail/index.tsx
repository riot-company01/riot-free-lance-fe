import { slackUrlVar } from "@/components/store";
import { PATHS } from "@/const/paths";
import { useGetDetailProjectQuery } from "@/lib/graphql/graphql";
import { useRouter } from "next/router";
import { KeywordTag } from "../common/keyword-tag";
import { Button } from "./button";
import { Description } from "./Description";
import * as Styles from "./styles";

type ProjectDetailType = {
  projectId: string | string[] | undefined;
};

export const ProjectDetail = ({ projectId }: ProjectDetailType) => {
  const { push } = useRouter();
  const { data } = useGetDetailProjectQuery({
    variables: {
      id: Number(projectId),
    },
  });

  const projectDetailData = data?.project[0];

  const onClickApplication = () => {
    slackUrlVar();
  };
  const onClickBackToList = () => {
    push(PATHS.PROJECT);
  };

  if (!projectDetailData) return null;

  return (
    <Styles.DivWrapper>
      <Styles.HeadProjectName>
        {projectDetailData.projectName}
      </Styles.HeadProjectName>
      <Styles.DivKeywordWrapper>
        {projectDetailData.keyword.map((item, idx) => (
          <KeywordTag key={idx}>{item}</KeywordTag>
        ))}
      </Styles.DivKeywordWrapper>
      <Styles.DivBasicInfo>
        <Styles.SecBasicInfoWrapper>
          <Styles.HeadBasicInfo>単価</Styles.HeadBasicInfo>

          {projectDetailData.price === "応相談" ? (
            <Styles.PerBasicInfo>
              <Styles.SpanPriceColor>
                {projectDetailData.price}
              </Styles.SpanPriceColor>
            </Styles.PerBasicInfo>
          ) : (
            <Styles.PerBasicInfo>
              〜
              <Styles.SpanPriceColor>
                {projectDetailData.price}
              </Styles.SpanPriceColor>
              円/月
            </Styles.PerBasicInfo>
          )}
        </Styles.SecBasicInfoWrapper>
        <Styles.SecBasicInfoWrapper>
          <Styles.HeadBasicInfo>契約形態</Styles.HeadBasicInfo>
          <Styles.PerBasicInfo>業務委託（フリーランス）</Styles.PerBasicInfo>
        </Styles.SecBasicInfoWrapper>
        <Styles.SecBasicInfoWrapper>
          <Styles.HeadBasicInfo>最寄駅</Styles.HeadBasicInfo>
          <Styles.PerBasicInfo>六本木・リモート作業可能</Styles.PerBasicInfo>
        </Styles.SecBasicInfoWrapper>
        <Styles.SecBasicInfoWrapper>
          <Styles.HeadBasicInfo>職種</Styles.HeadBasicInfo>
          <Styles.PerBasicInfo>そもそも何かが必要！！！</Styles.PerBasicInfo>
        </Styles.SecBasicInfoWrapper>
      </Styles.DivBasicInfo>
      <Description projectDetailData={projectDetailData} />

      <Styles.DivButtonWrapper>
        <Button
          text="この案件に応募する"
          borderColor={"#5a85fa"}
          backGroundCalor="#5a85fa"
          onClick={onClickApplication}
        />
        <Button
          text="案件一覧にもどる"
          borderColor={"#fa5a5a"}
          backGroundCalor="#fa5a5a"
          onClick={onClickBackToList}
        />
      </Styles.DivButtonWrapper>
    </Styles.DivWrapper>
  );
};
