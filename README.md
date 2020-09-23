# margrave

[![NPM version](https://badgen.net/npm/v/margrave)](https://npmjs.com/package/margrave)
[![NPM downloads](https://badgen.net/npm/dm/margrave)](https://npmjs.com/package/margrave)
[![Build Status](https://travis-ci.com/smmoosavi/margrave.svg?branch=master)](https://travis-ci.com/smmoosavi/margrave)
[![codecov](https://codecov.io/gh/smmoosavi/margrave/branch/master/graph/badge.svg)](https://codecov.io/gh/smmoosavi/margrave)

maintain the defense of borders of modules

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
  - [Conventions](#conventions)
  - [Example](#example)

<!-- tocstop -->

## Install

```bash
yarn global add margrave
```

## Usage

```bash
cd path-to-project
margrave
```

The `margrave` command line scans import statements and checks some conventions about relative and absolute imports.

### Conventions

- any directory contains aa `index.ts` files is a territory
- `index.ts` files only should contain re-exports
- some functions, types, and variables can be re-exported from `index.ts` as public
- any `ts` or `tsx` file inside a territory can import from any file inside the territory and this import should be relative
- any `ts` or `tsx` file can import from `index.ts` of other territories, and this import should be absolute

### Example

```
src
|-- app.tsx
|-- pages
|   |-- index.ts
|   `-- PageA.tsx
`-- user
    |-- index.ts
    |-- type.ts
    `-- User.tsx
```

| file                  | import statement |      allowed       |
| --------------------- | ---------------- | :----------------: |
| `src/pages/PageA.tsx` | `src/user`       | :heavy_check_mark: |
| `src/pages/PageA.tsx` | `../user`        |        :x:         |
| `src/pages/PageA.tsx` | `src/user/User`  |        :x:         |
| `src/pages/PageA.tsx` | `src/user/type`  |        :x:         |
| `src/user/User.tsx`   | `./type`         | :heavy_check_mark: |
| `src/user/User.tsx`   | `src/user/type`  |        :x:         |
| `src/user/User.tsx`   | `src/user`       |        :x:         |
| `src/user/User.tsx`   | `.`              |        :x:         |
