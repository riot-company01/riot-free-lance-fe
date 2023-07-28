import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { GetWorkDocument } from "@/lib/graphql/graphql";

type Props = {
  defaultWorkId?: number;
};

export function Detail({ defaultWorkId }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  // TODO:検索を切り替えた時にときにdetail検索が維持されるのだめ
  const { data } = useQuery(GetWorkDocument, {
    variables: {
      id: (Number(router.query["work-id"]) || defaultWorkId) as number,
    },
  });
  const work = data?.works_by_pk;

  const copyUrlHandler = async () => {
    const currentUrl = location.href;
    await navigator.clipboard.writeText(currentUrl);
    alert("urlがコピーされました");
  };

  useEffect(() => {
    ref.current?.scrollTo({
      top: 0,
    });
  }, [work]);

  if (!work)
    return (
      <DetailContainer isSelected={!!router.query["skill-ids"]} ref={ref}>
        <Skeleton variant="rectangular" height={"100vh"} />
      </DetailContainer>
    );

  return (
    <DetailContainer isSelected={!!router.query["skill-ids"]} ref={ref}>
      <Title>{work.title}</Title>
      <MonthlyPrice>
        <Icon>
          <MonetizationOnIcon fontSize="small" />
        </Icon>

        {(() => {
          if (work.minMonthlyPrice && work.maxMonthlyPrice) {
            return (
              <>
                <Strong>{work.minMonthlyPrice}</Strong>~<Strong>{work.maxMonthlyPrice}</Strong>
                <Span>
                  万円/月額 (想定年収: {work.minMonthlyPrice * 12}~{work.maxMonthlyPrice * 12}万円)
                </Span>
              </>
            );
          } else if (work.minMonthlyPrice || work.maxMonthlyPrice) {
            return (
              <>
                <Strong>{work.minMonthlyPrice || work.maxMonthlyPrice}</Strong>
                <Span>万円/月額 (想定年収: {((work.minMonthlyPrice || work.maxMonthlyPrice) as number) * 12}万円)</Span>
              </>
            );
          } else {
            return <Span>要相談</Span>;
          }
        })()}
      </MonthlyPrice>
      <FlexContainer>
        <Info>
          <Icon>
            <AccessTimeIcon fontSize="small" />
            <Text>
              {work.minWorkHours}~{work.maxWorkHours}時間
            </Text>
          </Icon>
        </Info>
        <Info>
          <Icon>
            <PaymentIcon fontSize="small" />
            <Text>30日</Text>
          </Icon>
        </Info>
        <Info>
          <Icon>
            <DocumentScannerIcon fontSize="small" />
            <Text>{work.contractType}</Text>
          </Icon>
        </Info>
      </FlexContainer>

      <FlexContainer>
        <Icon>
          <LocationOnIcon fontSize="small" />
          <Text>{work.location}</Text>
        </Icon>
      </FlexContainer>

      <Description>
        <ReactMarkdown>{work.description}</ReactMarkdown>
      </Description>

      <FlexContainer>
        <Button variant="contained" onClick={copyUrlHandler}>
          案件のURLをコピーする
        </Button>
      </FlexContainer>
    </DetailContainer>
  );
}

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const DetailContainer = styled.div<{ isSelected: boolean }>`
  padding: 16px;
  border-radius: 8px;
  max-height: ${({ isSelected }) => (isSelected ? "calc(100dvh - 198px)" : "calc(100dvh  - 166px)")};
  overflow: scroll;
  border: 1px solid rgb(224, 224, 224);
  background-color: white;
  position: sticky;
  top: ${({ isSelected }) => (isSelected ? "198px" : "166px")};
`;

const MonthlyPrice = styled.div`
  font-size: 20px;
  padding-top: 8px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  svg {
    font-size: 16px;
  }
`;

const Strong = styled.div`
  color: #f86986;
  font-family: "HelveticaNeue-CondensedBold", Helvetica, Arial, sans-serif;
`;

const Span = styled.div`
  font-size: 12px;
`;

const Info = styled.div`
  font-size: 14px;
`;

const FlexContainer = styled.div`
  display: flex;
  padding-top: 8px;
`;

const Text = styled.div`
  padding-left: 8px;
  font-size: 12px;
`;

const Description = styled.div`
  * {
    all: revert;
  }
`;
