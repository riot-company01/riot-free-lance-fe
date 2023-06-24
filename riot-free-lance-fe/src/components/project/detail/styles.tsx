import { SCREEN_SIZE } from "@/const/screen-size";
import styled from "@emotion/styled";

export const DivWrapper = styled.div`
  border-bottom: solid 6px #edf4fc;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
  border-radius: 9px;

  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    margin: 16px;
    padding: 16px;
  }

  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    margin: 40px;
    padding: 36px;
    background-color: white;
  }
`;

export const HeadProjectName = styled.h2`
  text-align: center;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    font-size: 20px;
    font-weight: bold;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const DivKeywordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
`;

export const DivBasicInfo = styled.div`
  border: solid 4px #edf4fc;
  margin-bottom: 16px;
`;

export const SecBasicInfoWrapper = styled.section`
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeadBasicInfo = styled.h3`
  background-color: #edf4fc;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    text-align: center;
  }

  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    width: 164px;
    padding: 8px;
  }
`;

export const PerBasicInfo = styled.p`
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    text-align: center;
    padding: 4px;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) {
    padding: 4px 4px 4px 16px;
  }
`;

export const SpanPriceColor = styled.span`
  font-size: 24px;
  color: #f7979c;
  font-weight: bold;
`;

export const DivButtonWrapper = styled.div`
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) and (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    margin: auto;
    width: 432px;
    display: flex;
    justify-content: space-around;
  }

  @media (min-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    margin: auto;
    width: 600px;
    display: flex;
    justify-content: space-around;
  }
`;
