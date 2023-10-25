import { useMutation } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import { AddFavoriteDocument, DeleteFavoriteDocument } from "@/lib/graphql/graphql";
import { COLOR } from "@/styles/colors";

type Props = {
  isViewed: boolean;
  hasBookmark: boolean;
  userId?: string;
  workId: number;
};

export function Tags({ isViewed, hasBookmark, userId, workId }: Props) {
  const [isFavorite, setIsFavorite] = useState(hasBookmark);
  const [addFavorite] = useMutation(AddFavoriteDocument);
  const [deleteFavorite] = useMutation(DeleteFavoriteDocument);
  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (userId && !isFavorite) {
      addFavorite({
        variables: {
          userId,
          workId,
        },
      });
    }

    if (userId && isFavorite) {
      deleteFavorite({
        variables: {
          userId,
          workId,
        },
      });
    }

    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };
  return (
    <Wrapper>
      <NewTag isViewed={isViewed}>{isViewed ? "閲覧済" : "New"}</NewTag>
      <CustomTagWrapper>
        <CustomTag>リモートワーク</CustomTag>
        <CustomTag>面談一回</CustomTag>
        <CustomTag>高単価</CustomTag>
      </CustomTagWrapper>
      <FavoriteButton onClick={onClick} role="button">
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

const FavoriteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`;

const CustomTag = styled.div`
  color: ${COLOR.WHITE.code};
  background: ${COLOR.BASE_COLOR.code};
  padding: 4px;
  font-size: 12px;
  border-radius: 4px;
`;
