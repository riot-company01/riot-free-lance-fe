import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Chip } from "@mui/material";
import router from "next/router";
import removeMd from "remove-markdown";
import type { GetWorksQuery } from "@/lib/graphql/graphql";

export function Card({ item }: { item: GetWorksQuery["work"][number] }) {
  return (
    <Wrapper
      onClick={() => {
        router.push(
          {
            query: {
              ...router.query,
              "work-id": item.id,
            },
          },
          undefined,
          { scroll: false }
        );
      }}
    >
      <Title>
        <div>{item.title}</div>
      </Title>
      <MonthlyPrice>
        <Icon>
          <MonetizationOnIcon fontSize="small" />
        </Icon>
        {(() => {
          if (item.minMonthlyPrice && item.maxMonthlyPrice) {
            return (
              <>
                <Strong>{item.minMonthlyPrice}</Strong>~<Strong>{item.maxMonthlyPrice}</Strong>
                <Span>
                  万円/月額 (想定年収: {item.minMonthlyPrice * 12}~{item.maxMonthlyPrice * 12}万円)
                </Span>
              </>
            );
          } else if (item.minMonthlyPrice || item.maxMonthlyPrice) {
            return (
              <>
                <Strong>{item.minMonthlyPrice || item.maxMonthlyPrice}</Strong>
                <Span>万円/月額 (想定年収: {((item.minMonthlyPrice || item.maxMonthlyPrice) as number) * 12}万円)</Span>
              </>
            );
          } else {
            return <Span>要相談</Span>;
          }
        })()}
      </MonthlyPrice>
      <FlexContainer>
        <Icon>
          <ReportIcon />
        </Icon>
        <div>{item.contractType}</div>
      </FlexContainer>
      <FlexContainer>
        <Icon>
          <LocationOnIcon />
        </Icon>
        <div>{item.location}</div>
      </FlexContainer>
      <FlexContainerLabel>
        {item.languages.map((value, idx) => {
          return (
            <Chip
              key={idx}
              label={value.skill?.name}
              sx={{
                borderRadius: 0,
                fontWeight: "bold",
              }}
            />
          );
        })}
      </FlexContainerLabel>
      <MdWrapper>{removeMd(item.description)}</MdWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid rgb(224, 224, 224);
  padding: 16px;
  width: 480px;
  :not(:first-of-type) {
    margin-top: 16px;
  }
  max-width: 480px;
  background-color: white;
  height: 400px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  display: flex;
`;

const MonthlyPrice = styled.div`
  font-size: 20px;
  padding-top: 8px;
  display: flex;
  align-items: center;
`;

const Strong = styled.div`
  color: #f86986;
  font-family: "HelveticaNeue-CondensedBold", Helvetica, Arial, sans-serif;
`;

const Span = styled.div`
  font-size: 12px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  svg {
    font-size: 16px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 14px;
`;

const FlexContainerLabel = styled(FlexContainer)`
  overflow: auto;
  flex-wrap: wrap;
  gap: 4px;
`;

const MdWrapper = styled.div`
  padding-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
`;
