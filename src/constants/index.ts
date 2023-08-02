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
  HEADER: responsiveFontSizes(createTheme()).zIndex.appBar,
  MODAL: responsiveFontSizes(createTheme()).zIndex.modal,
};
