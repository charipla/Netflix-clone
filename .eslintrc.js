export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // TypeScript用の推奨ルールを追加
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser", // TypeScript用のパーサーを指定
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // JSXサポートを有効化
    },
  },
  plugins: ["react", "@typescript-eslint"], // TypeScript用プラグインも追加
  settings: {
    react: {
      version: "detect", // 自動的にReactのバージョンを検出
    },
  },
  rules: {
    "react/jsx-uses-react": "off", // React 17以降では不要
    "react/react-in-jsx-scope": "off", // React 17以降では不要
  },
};
