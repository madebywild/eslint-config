module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier", "import"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "no-undef": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "import/no-default-export": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
      },
    ],
  },
};
