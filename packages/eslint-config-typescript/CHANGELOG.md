# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.5.0](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.4.2...@madebywild/eslint-config-typescript@0.5.0) (2022-09-21)


### Features

* disable no-undef rule for ts file ([d6a5a1a](https://github.com/madebywild/eslint-config/commit/d6a5a1aa8b4e3e3abc3ef81750d4b7fb11e7928c))





## [0.4.2](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.4.1...@madebywild/eslint-config-typescript@0.4.2) (2022-09-20)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## [0.4.1](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.4.0...@madebywild/eslint-config-typescript@0.4.1) (2022-06-23)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





# [0.4.0](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.6...@madebywild/eslint-config-typescript@0.4.0) (2022-06-20)


### Features

* upgrade ts parser deps ([e259333](https://github.com/madebywild/eslint-config/commit/e2593333e48517bb7c2307ebc397b27c490ac9da))





## [0.3.6](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.5...@madebywild/eslint-config-typescript@0.3.6) (2022-04-20)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## [0.3.5](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.4...@madebywild/eslint-config-typescript@0.3.5) (2022-03-08)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## [0.3.4](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.3...@madebywild/eslint-config-typescript@0.3.4) (2022-03-08)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## [0.3.3](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.2...@madebywild/eslint-config-typescript@0.3.3) (2021-09-27)


### Bug Fixes

* change typescript plugin version target ([f3995d7](https://github.com/madebywild/eslint-config/commit/f3995d7b88f3f31fb0ab96f8bdfbac05025a05dc))





## [0.3.2](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.1...@madebywild/eslint-config-typescript@0.3.2) (2021-09-27)


### Bug Fixes

* add typescript plugin to peerDependencies ([61e6605](https://github.com/madebywild/eslint-config/commit/61e66057f579ce7e1f7ef76bdcb4808843ba2f48))





## [0.3.1](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.3.0...@madebywild/eslint-config-typescript@0.3.1) (2021-08-18)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





# [0.3.0](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.2.0...@madebywild/eslint-config-typescript@0.3.0) (2021-08-18)


### Features

* **base:** set ecma version to 6 ([5fd5dfe](https://github.com/madebywild/eslint-config/commit/5fd5dfe0c13aa449fb3312674e908828db5c7395))





# 0.2.0 (2021-08-12)


### Features

* split up eslint config ([500f44c](https://github.com/madebywild/eslint-config/commit/500f44c98568e5313801bf806b06eb70940d36b3))


### BREAKING CHANGES

* changed repo structure to monorepo

* split up eslint config, added lerna, bumped version to 0.2.3

* removed empty overrides

* eslint-config-typescript, ts only overrides are now rules

* set eslint and plugins to peerDependencies

* updated package versions of new packages

* eslint-config-typescript, moved typescript rules back into overrides

* fix: prettier plugin loading and typescript parsing

* build: removed old index.js

* build: change root pkg name

* build: remove yarn.lock from gitignore

* fix: set plugins

* chore: moved everything to peerDependencies

* ci: add registry info

* fix: added stacked peerDependencies

* style: add eslint

* docs: add base documentation

* docs: github README.md no points to docs.wild.plus docu and small updates

* docs: updated elint-config readme.md

* ci: temporary removed branch restriction for release

* ci: add branch param

* ci: fix branch param syntax

* build: update yarn.lock

* chore(release): [skip ci]

 - @madebywild/eslint-config-base@0.1.1
 - @madebywild/eslint-config-typescript@0.1.1
 - @madebywild/eslint-config@0.2.4

* docs: simplified peerdeps installing

* chore(release): [skip ci]

 - @madebywild/eslint-config-base@0.1.2
 - @madebywild/eslint-config-typescript@0.1.2
 - @madebywild/eslint-config@0.2.5

* fix: removed wrong plugin

* chore(release): [skip ci]

 - @madebywild/eslint-config-base@0.1.3
 - @madebywild/eslint-config-typescript@0.1.3
 - @madebywild/eslint-config@0.2.6

* docs: added peer dependency install instructions for different npm versions

* chore(release): [skip ci]

 - @madebywild/eslint-config-base@0.1.4
 - @madebywild/eslint-config-typescript@0.1.4
 - @madebywild/eslint-config@0.2.7

* ci: also ignore mdx changes

* chore(release): [skip ci]

 - @madebywild/eslint-config-base@0.1.5
 - @madebywild/eslint-config-typescript@0.1.5
 - @madebywild/eslint-config@0.2.8

* ci: removed private registry

* ci: re-added main branch restriction

Co-authored-by: Lorenzo Migliorero <lorenzomigliorero@gmail.com>
Co-authored-by: GitHub <wild-bot@github.com>





## [0.1.5](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.1.4...@madebywild/eslint-config-typescript@0.1.5) (2021-08-11)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## [0.1.4](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.1.3...@madebywild/eslint-config-typescript@0.1.4) (2021-08-11)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## [0.1.3](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.1.2...@madebywild/eslint-config-typescript@0.1.3) (2021-08-11)


### Bug Fixes

* removed wrong plugin ([2a96d22](https://github.com/madebywild/eslint-config/commit/2a96d22e33531a980919b4cc9587a5833681fb5b))





## [0.1.2](https://github.com/madebywild/eslint-config/compare/@madebywild/eslint-config-typescript@0.1.1...@madebywild/eslint-config-typescript@0.1.2) (2021-08-11)

**Note:** Version bump only for package @madebywild/eslint-config-typescript





## 0.1.1 (2021-08-10)


### Bug Fixes

* added stacked peerDependencies ([658eaef](https://github.com/madebywild/eslint-config/commit/658eaef29cc4b0f3d4b9d1529cec38d318effe71))
* prettier plugin loading and typescript parsing ([4985837](https://github.com/madebywild/eslint-config/commit/49858376ee32a25e390dbfa58bb3fa5838a3d467))
* set plugins ([16b0583](https://github.com/madebywild/eslint-config/commit/16b058323d37ea6efc609dbf2ccb028874e6f965))
