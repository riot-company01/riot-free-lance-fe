import { PathsMap } from "./paths";

export type PROJECTMap = {
  list: {
    pathname: PathsMap["PROJECT"];
  };
  detail: {
    pathname: PathsMap["PROJECT"];
    query?: {
      id: string;
    };
  };
};

export type PROJECTHref = PROJECTMap[keyof PROJECTMap];

export type Queries = PROJECTMap["detail"]["query"];
