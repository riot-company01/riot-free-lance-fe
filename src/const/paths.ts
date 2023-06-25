export const PATHS = {
  PROJECT: "/project",
};

export type PathsMap = typeof PATHS;

export type Paths = PathsMap[keyof PathsMap];
