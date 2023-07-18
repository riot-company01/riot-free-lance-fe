import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Button } from "../../common/button";
import { KeywordTag } from "../common/keyword-tag";
import { Description } from "./Description";
import * as Styles from "./styles";
import { PATHS } from "@/const/paths";
import type { GetDetailProjectQuery, GetDetailProjectQueryVariables } from "@/lib/graphql/graphql";
import { GetDetailProjectDocument } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

type ProjectDetailType = {
  projectId: string | string[] | undefined;
};

export const ProjectDetail = ({ projectId }: ProjectDetailType) => {
  const { push } = useRouter();
  const { data } = useQuery<GetDetailProjectQuery, GetDetailProjectQueryVariables>(GetDetailProjectDocument, {
    variables: {
      id: Number(projectId),
    },
  });

  const projectDetailData = data?.project[0];

  const copyUrlHandler = async () => {
    const currentUrl = location.href;
    await navigator.clipboard.writeText(currentUrl);
    alert("urlがコピーされました");
  };
  const onClickBackToList = () => {
    push(PATHS.PROJECT);
  };

  if (!projectDetailData) return null;

  return (
    <Styles.DivWrapper>
      <Styles.HeadProjectName>{projectDetailData.projectName}</Styles.HeadProjectName>
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
              <Styles.SpanPriceColor>{projectDetailData.price}</Styles.SpanPriceColor>
            </Styles.PerBasicInfo>
          ) : (
            <Styles.PerBasicInfo>
              〜<Styles.SpanPriceColor>{projectDetailData.price}</Styles.SpanPriceColor>
              万円/月
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
        {/* <Styles.SecBasicInfoWrapper>
          <Styles.HeadBasicInfo>職種</Styles.HeadBasicInfo>
          <Styles.PerBasicInfo>そもそも何かが必要！！！</Styles.PerBasicInfo>
        </Styles.SecBasicInfoWrapper> */}
      </Styles.DivBasicInfo>
      <Description projectDetailData={projectDetailData} />

      <Styles.DivButtonWrapper>
        <Button
          text="案件のURLをコピーする"
          width={200}
          backGround={COLOR.WHITE.code}
          borderColor={COLOR.GRAY.code}
          fontColor={COLOR.GRAY.code}
          onClick={copyUrlHandler}
        />
        <Button
          text="案件一覧にもどる"
          width={200}
          backGround={COLOR.RED.code}
          fontColor={COLOR.WHITE.code}
          onClick={onClickBackToList}
        />
      </Styles.DivButtonWrapper>
    </Styles.DivWrapper>
  );
};
