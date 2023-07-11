/**
 * TypeScript 用の eslint 設定
 */
module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: true,
  },
  settings: {
    // import alias を張るケースの解決のため
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // 返り値の推論を許容するため
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // @ts-ignore の一時的利用時に付与しないため
    "@typescript-eslint/ban-ts-comment": "off",
    // import type への振り分けをすることで視認性の向上・モジュールバンドラに import type であることを明示する
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    // no-unused-imports で import 除去を設定するため無効化
    "@typescript-eslint/no-unused-vars": "off",
  },
};
