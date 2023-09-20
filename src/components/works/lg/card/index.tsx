import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReportIcon from "@mui/icons-material/Report";
import { Card, CardActionArea, Chip, IconButton } from "@mui/material";
import router from "next/router";
import removeMd from "remove-markdown";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import { useFavoriteButton } from "@/components/hooks/use-favorite-button";
import type { GetFavoriteWorksQuery, GetWorksQuery } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

export function CustomCard({
  item,
  hasFavorite,
  userToFavoriteWorksData,
}: {
  item: GetWorksQuery["works"][number];
  hasFavorite: boolean | undefined;
  userToFavoriteWorksData?: GetFavoriteWorksQuery["users"][0]["user_to_works"];
}) {
  const { user } = useUser();

  const { handleClickAddFavoriteClick, handleClickDeleteFavoriteClick } = useFavoriteButton({
    userId: user?.sub || "",
    workId: item.id,
    userToFavoriteWorksData,
  });

  return (
    <CustomCardActionArea
      sx={{ cursor: "pointer", borderRadius: 2, marginLeft: "2px" }}
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
      {item.isClosed && (
        <Closed>
          <Msg>この案件の募集は終了しました。</Msg>
        </Closed>
      )}
      <CardActionArea
        sx={{
          padding: 2,
          minHeight: 400,
        }}
      >
        <TitleWrapper>
          <Title>
            <div>{item.title}</div>
          </Title>
          {hasFavorite ? (
            <IconButton
              onClick={() => {
                handleClickDeleteFavoriteClick();
              }}
            >
              <FavoriteIcon fontSize="large" sx={{ color: COLOR.RED.code }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                handleClickAddFavoriteClick();
              }}
            >
              <FavoriteBorderIcon color="disabled" fontSize="large" />
            </IconButton>
          )}
        </TitleWrapper>

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
                  <Span>
                    万円/月額 (想定年収: {((item.minMonthlyPrice || item.maxMonthlyPrice) as number) * 12}万円)
                  </Span>
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
    </CustomCardActionArea>
  );
}

const CustomCardActionArea = styled(Card)`
  position: relative;
  :not(:first-of-type) {
    margin-top: 16px;
  }
  width: 480px;
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
`;

const PublicationDate = styled.div`
  padding-top: 8px;
  font-size: 12px;
`;
