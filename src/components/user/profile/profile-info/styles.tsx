import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";

export const DivProfileInfoWrapper = styled.div`
  width: 720px;
  @media (min-width: ${SCREEN_SIZE.isSpSize}) {
    margin-left: 16px;
  }
`;

export const DivHeadItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

export const HeadName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const SpanIcon = styled.span`
  margin: 8px;
`;

export const AnchorItem = styled.a`
  color: #20b2aa;
`;

export const DivItem = styled.div`
  margin-bottom: 8px;
`;

export const HeadTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;

export const PerItem = styled.p`
  margin-left: 8px;
`;

export const AnchorLeftMargin = styled.a`
  margin-left: 8px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 2px dotted #a1a1a1;
`;
