import styled from "@emotion/styled";
import { SCREEN_SIZE } from "@/const/screen-size";

export const Wrap = styled.div`
  display: flex;
`;

export const ProjectListHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeadListTitle = styled.h1`
  color: gray;
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;
export const SideBar = styled.div`
  position: sticky;
  top: 0px;
  background-color: red;
  width: 162px;
`;

export const DivFilter = styled.div`
  margin: 16px 8px 16px 16px;
  background-color: blue;
`;

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  overflow: scroll;
  @media (max-width: ${SCREEN_SIZE.isSpSize}) {
    margin: 8px;
  }
  @media (min-width: ${SCREEN_SIZE.isTabletSizeMin}) and (max-width: ${SCREEN_SIZE.isTabletSizeMax}) {
    margin: 16px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DivWrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (min-width: 865px) {
    margin: 12px 40px 40px 40px;
  }
  @media (min-width: ${SCREEN_SIZE.isPcSize}) {
    margin: 30px 60px 60px 60px;
  }
`;
