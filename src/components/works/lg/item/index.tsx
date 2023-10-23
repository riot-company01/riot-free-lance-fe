import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Card as _Card, CardActionArea as _CardActionArea, Chip } from "@mui/material";
import router from "next/router";
import removeMd from "remove-markdown";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import { Tags } from "@/components/works/lg/item/tags";
import type { GetWorksQuery } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";
import { handleLocalStorage } from "@/util/handle-local-storage";

type Work = {
  workId: number;
};

export function Item({ item }: { item: GetWorksQuery["works"][number] }) {
  const { getLocalStorage, setLocalStorage } = handleLocalStorage();
  const viewedWorks = getLocalStorage<Work[]>("viewedWorks");
  const isViewed = viewedWorks?.some((i) => i.workId === item.id);

  function onItemClick() {
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
    if (viewedWorks && viewedWorks?.length !== 0) {
      const viewedWork = { workId: item.id };
      if (viewedWorks.some((i) => i.workId === item.id)) return;
      viewedWorks.push(viewedWork);
      setLocalStorage("viewedWorks", viewedWorks);
    } else {
      const viewedWork = { workId: item.id };
      setLocalStorage("viewedWorks", [viewedWork]);
    }
  }
  return (
    <Card onClick={onItemClick}>
      {item.isClosed && (
        <Closed>
          <Msg>この案件の募集は終了しました。</Msg>
        </Closed>
      )}
      <CardActionArea>
        <Tags isViewed={!!isViewed} />
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
        <PublicationDate>掲載日:{item.createAt}</PublicationDate>
      </CardActionArea>
    </Card>
  );
}

const Card = styled(_Card)`
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  margin-left: 2px;
  :not(:first-of-type) {
    margin-top: 16px;
  }
  width: 480px;
  :hover {
    outline: 1px solid ${COLOR.BASE_COLOR.code};
  }
  :first-child {
    margin-top: 1px;
  }
`;

const CardActionArea = styled(_CardActionArea)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: flex-start;
`;

const Closed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${WORKS_Z_INDEX.CLOSE_OVERLAY}; // TODO
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Msg = styled.div`
  color: white;
  font-weight: bold;
  justify-content: center;
  display: flex;
  font-size: 20px;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  display: flex;
  padding-top: 34px;
`;

const MonthlyPrice = styled.div`
  font-size: 20px;
  padding-top: 8px;
  display: flex;
  align-items: center;
`;

const Strong = styled.div`
  color: ${COLOR.RED.code};
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
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
`;

const PublicationDate = styled.div`
  padding-top: 8px;
  font-size: 12px;
`;
