import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import { COLOR } from "@/styles/colors";

export function Tags() {
  const [isFavorite, setIsFavorite] = useState(false);
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };
  return (
    <Wrapper>
      <NewTag>New</NewTag>
      <CustomTagWrapper>
        <CustomTag>リモートワーク</CustomTag>
        <CustomTag>面談一回</CustomTag>
        <CustomTag>高単価</CustomTag>
      </CustomTagWrapper>
      <FavoriteButton onClick={onClick}>
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

const NewTag = styled.div`
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
`;

const CustomTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 48px;
`;

const FavoriteButton = styled.button`
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
