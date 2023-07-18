import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";
import { COLOR } from "@/styles/colors";

export const DivProfileSummaryWrapper = styled.div`
  width: 280px;
  @media (min-width: ${SCREEN_SIZE.isSpSize}) {
    margin-right: 16px;
  }
`;

export const DivWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`;

export const DivHeadFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeadName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const DivAddSkill = styled.div`
  display: flex;
  justify-content: end;
  margin: 8px 0;
`;

export const SpanIcon = styled.span`
  margin: 8px;
`;

export const AnchorItem = styled.a`
  color: ${COLOR.BASE_COLOR.code};
`;

export const DivItem = styled.div`
  margin: 8px 0 8px 16px;
`;

export const PerMargin = styled.p`
  margin: 8px 0;
`;

export const DivTitle = styled.div`
  margin: 16px 0;
`;

export const DivWrpperSituation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 2px dotted ${COLOR.LIGHT_GRAY.code};
`;
