import { css } from "@emotion/react";
import { destyle } from "./destyle";

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
  }

  html,
  body {
    font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    line-height: 1.6;
    overscroll-behavior: none;
    //font-weight: 300;
  }
`;
