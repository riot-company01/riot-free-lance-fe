export const PATHS = {
  PROJECT: "/project",
  PROFILE: "/user/profile",
};

export type PathsMap = typeof PATHS;

export type Paths = PathsMap[keyof PathsMap];
