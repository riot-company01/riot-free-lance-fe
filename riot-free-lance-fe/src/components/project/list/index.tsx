import { GetProjectList } from "@/lib/graphql";
import { MyQueryQuery } from "@/lib/graphql/graphql";
import { useQuery } from "@apollo/client";
import React from "react";
import { ProjectContent } from "./item";
import * as Styles from "./styles";

export const ProjectList = () => {
  console.log("aaaa");
  const {data} = useQuery<MyQueryQuery>(GetProjectList)
  console.log("bbbbb");
  console.log(data);
  return (
    <Styles.Wrap>
      <div></div>
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
