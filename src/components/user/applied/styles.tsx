import styled from "@emotion/styled";
import { COLOR } from "@/styles/colors";

export const DivAppliedWrapper = styled.div`
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
`;

export const AppliedListHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeadTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 32px auto;
`;

export const DivWrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeadSummaryTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const DivWrapper = styled.div`
  display: flex;
`;

export const DivSummary = styled.div`
  width: 280px;
  height: 168px;
  padding: 20px;
  border: 1px solid ${COLOR.LIGHT_GRAY.code};
  border-radius: 8px;
`;

export const DivItems = styled.div`
  margin: 16px 0 0 16px;
`;

export const PerApplied = styled.p`
  color: ${COLOR.BASE_COLOR.code};
`;

export const DivProjectList = styled.div`
  min-width: 640px;
`;

export const DivNotAppliedContents = styled.div`
  min-width: 640px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivNotAppliedItem = styled.div`
  margin: 32px;
`;

export const PerNotAppliedItem = styled.p`
  color: ${COLOR.LIGHT_GRAY.code};
`;