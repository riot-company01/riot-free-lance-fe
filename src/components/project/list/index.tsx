import { useGetAllProjectQuery } from "@/lib/graphql/graphql";
import React from "react";
import { Loading } from "../../common/loading";
import { ProjectContent } from "./item";
import * as Styles from "./styles";

export const ProjectList = () => {
  const { data, loading } = useGetAllProjectQuery();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Styles.Wrap>
          {/* <Styles.SideBar>
          <Styles.DivFilter></Styles.DivFilter>
        </Styles.SideBar> */}
          <Styles.DivWrapper>
            <Styles.ProjectListHeader>
              <Styles.HeadListTitle>案件一覧</Styles.HeadListTitle>
            </Styles.ProjectListHeader>
            <Styles.DivWrapperList>
              {data?.project.map((item) => (
                <ProjectContent key={item.id} item={item} />
              ))}
            </Styles.DivWrapperList>
          </Styles.DivWrapper>
        </Styles.Wrap>
      )}
    </>
  );
};
