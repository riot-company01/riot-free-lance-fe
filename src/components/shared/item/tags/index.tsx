import { css } from "@emotion/react";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CardActionArea } from "@mui/material";
import { blue } from "@mui/material/colors";
import type { MouseEventHandler } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useFavorite } from "@/hooks/use-favorite";
import { COLOR } from "@/styles/colors";

type Props = {
  isViewed: boolean;
  isFavorite: boolean;
  userId?: string;
  workId: number;
};

export function Tags({ isViewed, isFavorite, userId, workId }: Props) {
  const { addFavorite, deleteFavorite } = useFavorite();
  const { execLogin } = useAuth();

  const onClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    if (userId && !isFavorite) {
      addFavorite({
        variables: {
          userId,
          workId,
        },
      });
      return;
    }
    if (userId && isFavorite) {
      deleteFavorite({
        variables: {
          userId,
          workId,
        },
      });
      return;
    }
    await execLogin();
  };
  return (
    <Wrapper>
      <NewTag isViewed={isViewed}>{isViewed ? "閲覧済" : "New"}</NewTag>
      <CustomTagWrapper>
        <CustomTag>リモートワーク</CustomTag>
        <CustomTag>面談一回</CustomTag>
        <CustomTag>高単価</CustomTag>
      </CustomTagWrapper>
      <FavoriteButton onClick={onClick} role="button" data-identify-name="favoriteButton">
        {isFavorite ? (
          <FavoriteIcon
            fontSize="large"
            style={{
              fill: `${COLOR.RED.code}`,
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            style={{
              fill: `${COLOR.GRAY.code}`,
            }}
          />
        )}
      </FavoriteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  height: 50px;
  width: calc(100% - 32px);
`;

const NewTag = styled.div<{ isViewed: boolean }>`
  width: 80px;
  height: 80px;
  transform: rotate(-45deg);
  position: absolute;
  top: -40px;
  left: -56px;
  display: flex;
  font-size: 14px;
  color: ${COLOR.WHITE.code};
  font-weight: bold;
  align-items: end;
  justify-content: center;
  background-color: ${COLOR.RED.code};
  ${({ isViewed }) =>
    isViewed &&
    css`
      background-color: ${COLOR.GRAY.code};
    `}
`;

const CustomTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 48px;
`;

const FavoriteButton = styled(CardActionArea)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const CustomTag = styled.div`
  color: white;
  background: ${blue[500]};
  padding: 4px;
  font-size: 12px;
  border-radius: 4px;
`;
