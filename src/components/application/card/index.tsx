import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Chip } from "@mui/material";
import type { GetWorkQuery } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";
import { SCREEN_SIZE } from "@/styles/width";

export function CustomCard({ item }: { item: GetWorkQuery["works_by_pk"] }) {
  return (
    <WorkInfo>
      <Title>
        <div>{item?.title}</div>
      </Title>
      <MonthlyPrice>
        <Icon>
          <MonetizationOnIcon fontSize="small" />
        </Icon>
        {(() => {
          if (item?.minMonthlyPrice && item?.maxMonthlyPrice) {
            return (
              <>
                <Strong>{item?.minMonthlyPrice}</Strong>~<Strong>{item?.maxMonthlyPrice}</Strong>
                <Span>万円/月額</Span>
              </>
            );
          } else if (item?.minMonthlyPrice || item?.maxMonthlyPrice) {
            return (
              <>
                <Strong>{item?.minMonthlyPrice || item?.maxMonthlyPrice}</Strong>
                <Span>万円/月額</Span>
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
        <div>{item?.contractType}</div>
      </FlexContainer>
      <FlexContainer>
        <Icon>
          <LocationOnIcon />
        </Icon>
        <div>{item?.location}</div>
      </FlexContainer>
      <FlexContainerLabel>
        {item?.languages.map((value, idx) => {
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
    </WorkInfo>
  );
}

const WorkInfo = styled.div`
  border-radius: 8px;
  background-color: ${COLOR.RIGHT_WHITE.code};

  @media screen and (max-width: ${SCREEN_SIZE.PC}) {
    margin: 16px;
    padding: 16px;
  }

  @media screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    width: 600px;
    margin: 32px auto;
    padding: 16px;
  }
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
