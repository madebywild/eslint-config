module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier", "import", "flowtype"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
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
