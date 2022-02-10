module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": "off",
  },
};
