# @madebywild/eslint-config

To use it in your project, you need to install this package, eslint and prettier:

```bash
npm i @madebywild/eslint-config eslint prettier --save-dev
```

Then, edit your projects `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@madebywild/eslint-config"
  }
}
```

How to bump version:

Install `np` from https://github.com/sindresorhus/np

```bash
npm run release
```
