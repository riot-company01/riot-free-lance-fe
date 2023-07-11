module.exports = {
  plugins: ["sort-exports", "import", "unused-imports"],
  extends: ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings"],
  env: {
    // 設定ファイル等を node で記述しているため
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    // import/order で import の rules を 設定するため、デフォルトルール（ eslint ）を無効化
    "sort-imports": "off",
    // import の記述順序を alphabet の昇順に統一
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    // no-unused-imports で import 除去を設定するうため、デフォルトルール（ eslint ）を無効化
    "no-unused-vars": "off",
    // 未使用の import を除去
    "unused-imports/no-unused-imports": "error",
    // unused-imports/no-unused-imports のために no-unused-vars を無効化しているため、vars の warn は残すようにする
    "unused-imports/no-unused-vars": "error",
  },
};
