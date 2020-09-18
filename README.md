# @madebywild/config-eslint

To use it in your project, you need to install this package, eslint and prettier:

```bash
npm i @madebywild/config-eslint eslint prettier --save-dev
```

Then, edit your projects `package.json`:

```json
"eslintConfig": {
  "extends": "@madebywild/config-eslint"
}
```

How to bump version:

```bash
npm version patch -m "Bumped version" && npm publish --access public
```
