import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { GetWorkDocument } from "@/lib/graphql/graphql";

type Props = {
  defaultWorkId?: number;
  workListWrapperHeight?: number;
};

export function Detail({ defaultWorkId, workListWrapperHeight }: Props) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const isClientSide = typeof window !== "undefined";

  const { data } = useQuery(GetWorkDocument, {
    variables: {
      id: {
        _eq: Number(router.query["work-id"]) || defaultWorkId,
      },
    },
  });
  const work = data?.work[0];

  const handleScroll = () => {
    const targetPosition = workListWrapperHeight;
    const scrollPosition = window.scrollY;

    if (targetPosition) {
      if (targetPosition !== 400) {
        setScrolled(scrollPosition >= targetPosition - 800);
      } else {
        setScrolled(scrollPosition >= workListWrapperHeight - 800);
      }
    }

    setScrollOffset(window.scrollY);
  };

  const copyUrlHandler = async () => {
    const currentUrl = location.href;
    await navigator.clipboard.writeText(currentUrl);
    alert("urlがコピーされました");
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // 初回レンダリング時に1度実行しておく

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [workListWrapperHeight, isClientSide, scrollOffset]);

  if (!work) return null;

  return (
    <DetailContainer scroll={scrolled} scrollOffset={scrollOffset} workListWrapperHeight={workListWrapperHeight}>
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

      <Icon>
        <LocationOnIcon fontSize="small" />
        <Text>{work.location}</Text>
      </Icon>

      <Description>
        <ReactMarkdown>{work.description}</ReactMarkdown>
      </Description>

      <FlexButtonContainer>
        <Button variant="contained" onClick={copyUrlHandler}>
          案件のURLをコピーする
        </Button>
      </FlexButtonContainer>
    </DetailContainer>
  );
}

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const DetailContainer = styled.div<{ scroll: boolean; scrollOffset: number; workListWrapperHeight?: number }>`
  padding: 16px;
  width: 448px;
  border: 1px solid rgb(224, 224, 224);
  background-color: white;
  position: fixed;

  ${({ scroll, scrollOffset, workListWrapperHeight }) =>
    scroll &&
    workListWrapperHeight === 400 &&
    `bottom: ${scrollOffset}px;height: calc(100vh - 200px); 
    margin-bottom: 16px;`}

  ${({ scroll, scrollOffset, workListWrapperHeight }) =>
    scroll &&
    workListWrapperHeight !== 400 &&
    `
      top: calc(${workListWrapperHeight}px - ${scrollOffset}px - 650px);
      height: calc(100vh - 8px);
    `}

  overflow: auto;
  overscroll-behavior: contain;
  border-radius: 8px;
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
  flex-direction: column;
`;

const Text = styled.div`
  padding-left: 8px;
  font-size: 12px;
`;

const Description = styled.div`
  padding: 8px 0;
  h3 {
    margin: 16px 0 8px 0;
  }
`;

const FlexButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
