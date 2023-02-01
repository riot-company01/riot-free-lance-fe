module.exports = {
  root: true,
  extends: [
    "plugin:@next/next/recommended",
    "@dmm-com/eslint-config-rocket",
    "@dmm-com/eslint-config-rocket/+typescript",
    "@dmm-com/eslint-config-rocket/+react",
    "@dmm-com/eslint-config-rocket/+prettier",
  ],
  plugins: ["sort-exports"],
  env: {
    // 設定ファイル等を node で記述しているため
    node: true,
    browser: true,
  },
  rules: {
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
    "unused-imports/no-unused-vars": "error",
  },
};
