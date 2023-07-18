import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";
import { COLOR } from "@/styles/colors";

export const DivDescriptionWrpper = styled.div`
  margin: 32px 0 32px 0;
`;
export const SecDescription = styled.section`
  @media (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    margin-bottom: 16px;
  }
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    display: flex;
    margin-top: 16px;
  }

  border-bottom: dotted 3px ${COLOR.LIGHT_GRAY.code};
`;

export const HeadInfoTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    margin-top: 16px;
    margin-bottom: 8px;
  }
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    width: 15%;
    margin-right: 32px;
  }
`;

export const PerInfoDescription = styled.p`
  @media (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    margin-bottom: 16px;
  }
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    width: 85%;
    margin-bottom: 16px;
  }
`;

export const SecLastDescription = styled.section`
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    display: flex;
    margin-top: 16px;
  }
`;
