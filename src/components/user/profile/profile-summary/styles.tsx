import styled from "@emotion/styled";
import { COLOR } from "@/styles/colors";

export const DivProfileSummaryWrapper = styled.div`
  width: 280px;
  margin-right: 16px;
`;

export const DivWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`;

export const HeadName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const AnchorItem = styled.a`
  color: ${COLOR.BASE_COLOR.code};
`;

export const DivItem = styled.div`
  margin: 8px 0 8px 16px;
`;

export const DivTitle = styled.div`
  margin: 16px 0;
`;

export const DivWrpperSituation = styled.div`
  display: flex;
  flex-direction: column;
`;
