import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";
import { COLOR } from "@/styles/colors";

export const DivListItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const DivContent = styled.div`
  background-color: ${COLOR.WHITE.code};
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
  border-radius: 9px;
  min-width: 351px;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    margin: 4px;
  }

  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    margin: 8px;
    height: 220px;
  }
`;

export const HederContent = styled.h3`
  text-align: center;
  margin: 16px;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    font-weight: bold;
    font-size: 18px;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    font-weight: bold;
    font-size: 24px;
  }

  @media (min-width: 865px) {
    font-weight: bold;
    font-size: 16px;
  }
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const SecContentWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 16px;
`;

export const SecContent = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0 16px;
`;

export const DivPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SpanIcon = styled.span`
  margin-right: 8px;
`;

export const PerPrice = styled.p`
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
  }
`;

export const SpanPriceColor = styled.span`
  font-size: 24px;
  color: ${COLOR.LIGHT_RED.code};
  font-weight: bold;
`;

export const DivDescription = styled.div`
  display: flex;
`;

export const DivWrapperItem = styled.div`
  width: 120px;
`;