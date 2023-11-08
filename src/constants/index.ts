import { responsiveFontSizes, createTheme } from "@mui/material";

export const LG_BREAK_POINT = {
  xs: "none",
  sm: "none",
  md: "none",
  lg: "block",
  xl: "block",
};

export const MD_BREAK_POINT = { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" };

export const BREAK_POINT = {
  ...responsiveFontSizes(createTheme()).breakpoints.values,
} as {
  // extra-small
  xs: 0;
  // small
  sm: 600;
  // medium
  md: 900;
  // large
  lg: 1200;
  // extra-large
  xl: 1536;
};

export const COMMON_Z_INDEX = {
  HEADER: 1100,
  TAB: 1000,
  MODAL: 1300,
  LOADING: 9999,
} as const;

export const LG_GLOBAL_NAVIGATION = {
  HEADER: 49,
  FOOTER: 73,
};

export const MD_GLOBAL_NAVIGATION = {
  HEADER: 45,
  FOOTER: 64,
};

export const PATHS = {
  USER_PROFILE: "/user/profile",
  USER_APPLY: "/user/apply",
  USER_FAVORITE: "/user/favorite",
  WORKS: "/works",
  PRIVACY: "/privacy",
  TERMS: "/terms",
};
