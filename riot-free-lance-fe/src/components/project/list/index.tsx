import { ProjectContent } from "components/project/list/item";
import React from "react";
import * as Styles from "./styles";

export const ProjectList = () => {
  return (
    <Styles.Wrap>
      <Styles.SideBar>
        <Styles.DivFilter></Styles.DivFilter>
      </Styles.SideBar>
      <Styles.DivWrapper>
        <Styles.ProjectListHeader>
          <h1>案件一覧</h1>
        </Styles.ProjectListHeader>
        <Styles.DivWrapperList>
          {[...Array(10)].map((_, idx) => (
            <ProjectContent key={idx} />
          ))}
        </Styles.DivWrapperList>
      </Styles.DivWrapper>
    </Styles.Wrap>
  );
};
