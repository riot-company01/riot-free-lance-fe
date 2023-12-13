import { css } from "@emotion/react";
import { blue } from "@mui/material/colors";
import { destyle } from "./destyle";
import { COLOR } from "@/styles/colors";

export const GLOBAL_STYLE = css`
  ${destyle};

  * {
    --sat: env(safe-area-inset-top);
    --sar: env(safe-area-inset-right);
    --sab: env(safe-area-inset-bottom);
    --sal: env(safe-area-inset-left);
  }

  html {
    padding: var(--sat) var(--sar) var(--sab) var(--sal);
    scrollbar-width: thin;
  }

  :is(input, textarea, button, select, a):focus-visible {
    outline: 2px solid ${blue[500]};
    outline-offset: -2px;
  }
  html,
  body {
    line-height: 1.6;
    overscroll-behavior: none;
    font-weight: 500;
    background-color: ${COLOR.WHITE.code};
  }
`;
