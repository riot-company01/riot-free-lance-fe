import { css } from "@emotion/react";

export const destyle = css`
  /*! destyle.css v3.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    margin: 0;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
  button,
  input,
  optgroup,
  select,
  [type="checkbox"] {
    -webkit-appearance: checkbox;
    appearance: checkbox;
  }
  [type="radio"] {
    -webkit-appearance: radio;
    appearance: radio;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
  }
  button:disabled,
  [type="button"]:disabled,
  [type="reset"]:disabled,
  [type="submit"]:disabled {
    cursor: default;
  }
`;
