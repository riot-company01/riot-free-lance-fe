import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Card, Chip, Skeleton, styled as muiStyled } from "@mui/material";
import type { GetWorkQuery } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

export function CustomCard({ item, loading }: { item: GetWorkQuery["works_by_pk"]; loading: boolean }) {
  return (
    <>
      {!loading ? (
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
      ) : (
        <WrapperSkeleton>
          <CustomSkeleton variant="rectangular" height={"100%"} />
        </WrapperSkeleton>
      )}
    </>
  );
}

const WrapperSkeleton = styled.div`
  border-radius: 8px;
  margin: 32px auto;
  width: 600px;
  height: 260px;
`;

const CustomSkeleton = styled(Skeleton)`
  border-radius: 8px;
`;

const WorkInfo = muiStyled(Card)(({ theme }) => ({
  borderRadius: "8px",
  margin: "16px",
  padding: "16px",
  backgroundColor: `${COLOR.RIGHT_WHITE.code}`,

  [theme.breakpoints.up("sm")]: {
    width: "600px",
    margin: "32px auto",
    padding: "16px",
    backgroundColor: `${COLOR.RIGHT_WHITE.code}`,
  },
}));

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