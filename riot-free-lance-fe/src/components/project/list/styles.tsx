import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  height: 100vh;
`;

export const ProjectListHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBar = styled.div`
  position: sticky;
  top: 0px;
  background-color: red;
  width: 162px;
  height: 100vh;
`;

export const DivFilter = styled.div`
  margin: 16px 8px 16px 16px;
  background-color: blue;
  height: 100vh;
`;

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 160px);
  overflow: scroll;
`;

export const DivWrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 32px;
`;
