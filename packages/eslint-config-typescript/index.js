module.exports = {
  extends: ["@madebywild/eslint-config-base"],
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {},
    },
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            ignoreRestSiblings: true,
            args: "none",
            varsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
  rules: {},
};