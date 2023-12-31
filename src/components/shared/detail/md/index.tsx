import { useLazyQuery } from "@apollo/client";
import styled from "@emotion/styled";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button, Card, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { loadingVar } from "@/global-state";
import { useAuth } from "@/hooks/use-auth";
import { useFavorite } from "@/hooks/use-favorite";
import { GetWorkDocument } from "@/lib/graphql/graphql";

import { COLOR } from "@/styles/colors";

type Props = {
  id?: number;
  isFavorite: boolean;
  isApplied: boolean;
  userId?: string;
};

export function Detail({ id, isFavorite, userId, isApplied }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { execLogin, user } = useAuth();
  const { addFavorite, deleteFavorite } = useFavorite();

  // TODO:検索を切り替えた時にときにdetail検索が維持されるのだめ
  const [exec, { data }] = useLazyQuery(GetWorkDocument);
  const work = data?.works_by_pk;

  const onClickFavorite = async () => {
    if (id && userId && !isFavorite) {
      addFavorite({
        variables: {
          workId: id,
          userId,
        },
      });
      return;
    }
    if (id && userId && isFavorite) {
      deleteFavorite({
        variables: {
          workId: id,
          userId,
        },
      });
      return;
    }
    await execLogin();
  };

  const handleClickApplied = () => {
    !user && loadingVar(true);
    router.push({
      pathname: `apply/${id}`,
    });
  };

  useEffect(() => {
    if (id == undefined) return;
    (async () => {
      await exec({
        variables: { id },
      });
    })();
  }, [id]);

  useEffect(() => {
    ref.current?.scrollTo({
      top: 0,
    });
  }, [work]);

  if (!work)
    return (
      <CustomCardActionArea ref={ref}>
        <Skeleton variant="rectangular" height={"100vh"} />
      </CustomCardActionArea>
    );

  return (
    <>
      <CustomCardActionArea ref={ref}>
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
                  <Span>万円/月額 (想定年収:{((work.minMonthlyPrice || work.maxMonthlyPrice) as number) * 12}万円)</Span>
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

        <ButtonWrapper>
          <Button variant="contained" disabled={isApplied} color="secondary" sx={{ fontWeight: "bold" }} onClick={handleClickApplied}>
            {work.isClosed ? "似た案件がないか相談する" : isApplied ? "応募済み" : "案件の話を聞く"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClickFavorite}>
            {isFavorite ? "お気に入り解除" : "お気に入り登録"}
          </Button>
        </ButtonWrapper>

        <Description>
          <ReactMarkdown>{work.description}</ReactMarkdown>
        </Description>

        <ButtonWrapper>
          <Button variant="contained" disabled={isApplied} color="secondary" sx={{ fontWeight: "bold" }}>
            {work.isClosed ? "似た案件がないか相談する" : isApplied ? "応募済み" : "案件の話を聞く"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClickFavorite}>
            {isFavorite ? "お気に入り解除" : "お気に入り登録"}
          </Button>
        </ButtonWrapper>
      </CustomCardActionArea>
    </>
  );
}

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
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
  color: ${COLOR.RED.code};
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

const CustomCardActionArea = styled(Card)`
  padding: 16px;
  background-color: white;
  border-radius: 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  gap: 8px;
`;
