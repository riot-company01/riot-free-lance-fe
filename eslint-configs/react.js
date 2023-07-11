/**
 * React.js 用の eslint 設定
 */
module.exports = {
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  env: {
    browser: true,
  },
  settings: {
    // react version はアプリケーションに依存する
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // v17 以上は React の import が不要なため
    "react/react-in-jsx-scope": "off",
    // TypeScript 推奨につき PropTypes ではなく型推論で対応するため
    "react/prop-types": "off",
    // deps に含めるべき値を正しく選定するため
    "react-hooks/exhaustive-deps": "off",
    // tag, component の閉じタグを省略推奨とするため
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
};
