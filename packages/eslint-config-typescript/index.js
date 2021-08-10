module.exports = {
  extends: ["@madebywild/eslint-config-base"],
  parser: "@typescript-eslint/parser",
  overrides: [
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
            varsIgnorePattern: "^_"
          }
        ]
      }
    }
  ]
};
