import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";
import { COLOR } from "@/styles/colors";

export const DivProfileInfoWrapper = styled.div`
  width: 720px;
  @media (min-width: ${SCREEN_SIZE.isSpSize}) {
    margin-left: 16px;
  }
`;

export const DivHeadItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`;

export const HeadName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const AnchorItem = styled.a`
  color: ${COLOR.BASE_COLOR.code};
`;

export const DivItem = styled.div`
  margin-bottom: 20px;
`;

export const HeadTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PerItem = styled.p`
  margin-left: 8px;
`;

export const AnchorLeftMargin = styled.a`
  margin-left: 8px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 2px dotted ${COLOR.LIGHT_GRAY.code};
`;
