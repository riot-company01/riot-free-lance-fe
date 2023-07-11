import type { Paths, PathsMap } from "./paths";

export type ProjectMap = {
  list: {
    pathname: PathsMap["PROJECT"];
  };
  detail: {
    pathname: PathsMap["PROJECT"];
    query?: {
      id: number;
    };
  };
};

export type ProjectHref = ProjectMap[keyof ProjectMap];

export type Queries = ProjectMap["detail"]["query"];

export type Hrefs = ProjectHref;
export type Href = Paths | Hrefs;
