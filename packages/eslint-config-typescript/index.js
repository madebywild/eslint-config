module.exports = {
  extends: ["@madebywild/eslint-config-base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      plugins: ["typescript-eslint"],
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
