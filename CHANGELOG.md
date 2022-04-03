4.0.0 / 2022-04-03
==========================
 - [new] added ability to customize indentation and quotes in eslint config per-project
 - [new] added configuration for React
 - [new] added configuration for Typescript
 - [new] added ability to pass environment variable, which will make some rules to only warn instead of error (e.g. in development)
 - [breaking] the way of initializing the library has changed (see readme.md for more info)
 - [breaking] disallowed unnecessary boolean casts: [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)
 - [breaking] enabled [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md) rule
 - [breaking] enabled [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition) rule
 - [breaking] enabled [no-console](https://eslint.org/docs/rules/no-console) rule
 - [breaking] warn in development / error in production if `TODO BEFORE COMMIT` and `TODO BEFORE MERGE` commits used [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
 - [patch] allowed usage of `for in` and `for of` rules: [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)
 - [patch] allowed unnecessary parentheses: [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)
 - [patch] disabled [require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) rule in typescript projects
 - [patch] warn in development / error in production: [consistent-return](https://eslint.org/docs/rules/consistent-return)
 - [patch] warn in development / error in production: [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
 - [patch] warn in development / error in production: [no-console](https://eslint.org/docs/rules/no-console)
 - [patch] warn in development / error in production: [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
 - [patch] warn in development / error in production: [no-debugger](https://eslint.org/docs/rules/no-debugger)
 - [patch] warn in development / error in production: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)
 - [patch] warn in development / error in production: [react/jsx-boolean-value](https://eslint.org/docs/rules/react/jsx-boolean-value)
 - [patch] warn in development / error in production: [react/prop-types](https://eslint.org/docs/rules/react/prop-types)
 - [patch] warn in development / error in production: [react/no-unused-prop-types](https://eslint.org/docs/rules/react/no-unused-prop-types)
 - [patch] warn in development / error in production: [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
 - [doc] updated installation instructions

3.1.0 / 2020-11-28
==================
 - [new] added support of eslint v7
 - [breaking] disallowed empty lines at the beginning of file ([no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines), option **maxBOF** set)
 - [breaking] disallowed useless path segments for common.js modules imports ([import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md))
 - [patch] disabled [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md) rule for [Karma](https://karma-runner.github.io/) and [ESLint](https://eslint.org/) configs.
 - [patch] allowed triple slash comments (for TypeScript)
 - [patch] written better error description for restricted globals `isFinite` and `isNaN`
 - [fix] bad syntax of [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md) rule
 - [doc] updated installation instructions

3.0.0 / 2019-08-21
==================
 - [new] added support of eslint v6
 - [breaking] dropped support of eslint v4
 - [breaking] dropped support of node.js v4

2.0.1 / 2019-07-16
==================
 - [patch] wrongly published npm package

2.0.0 / 2019-07-15
==================
 - [new] added eslint v5 rules 
 - [breaking] minimum supported versions of eslint are: 4.19.1+ and 5.3.0+
 - [breaking] minimum supported version of node: 4+
 - [breaking] removed "node" from default env settings
 - [breaking] disallowed usage of `isNaN` and `isFinite` functions (use `Number.isNaN` or `Number.isFinite` instead)
 - [breaking] disallowed mixing of '%' and '**' operators with other arithmetic operators
 - [breaking] disallowed ".mjs" file extension in import statements
 - [breaking] disallowed cycle imports ([import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md))
 - [breaking] disallowed useless path segments ([import/no-useless-path-segments](https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md))
 - [breaking] enforced spaces after `/*` and before `*/` ([spaced-comment](https://eslint.org/docs/rules/spaced-comment), option **"balanced"** set to **true**)
 - [breaking] enforced an empty line between class members ([lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members))
 - [breaking] disallowed a newline before a single-line statement ([nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position), option **"beside"** set)
 - [breaking] disallowed a newline before an arrow function body ([implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak), option **"beside"** set)
 - [breaking] promises should be rejected only with an instance of Error object or undefined ([prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors), option **"allowEmptyReject"** set to **true**)
 - [breaking] disallowed async promise executor ([no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor))
 - [breaking] disallowed usage of Buffer constructor ([no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor))
 - [breaking] disallowed return assignments even if they are enclosed in parentheses ([no-return-assign](https://eslint.org/docs/rules/no-return-assign#always))
 - [breaking] disallowed self assignments of object props ([no-self-assign](https://eslint.org/docs/rules/no-self-assign#props))
 - [breaking] disallowed useless catch statements ([no-useless-catch](https://eslint.org/docs/rules/no-useless-catch))
 - [breaking] disallowed comparison with negative zero ([no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero))
 - [breaking] enforced consistent line breaks inside parentheses of function arguments ([function-paren-newline](https://eslint.org/docs/rules/function-paren-newline), option **"consistent"** set)
 - [breaking] enforced that semicolons are at the end of statements ([semi-style](https://eslint.org/docs/rules/semi-style), option **"last"** set)
 - [breaking] enforced space to be after colon of switch statement ([switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing), option **"after"** set to **true**, option **"before"** set to **false**)
 - [breaking] disallowed space between template tags and their literals ([template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing), option **"never"** set)
 - [breaking] disallowed a module from importing itself ([no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md))
 - [breaking] converted config files from json to js
 - [breaking] removed editorconfig files
 - [non-breaking] allowed to use class methods without this (disabled [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this))
 - [non-breaking] allowed to reassign params of functions (disabled [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign))
 - [patch] extended list of file patters that will not forbid the use of devDependencies
 - [patch] updated base ecmaVersion to 2018; removed deprecated experimentalObjectRestSpread option
 - [fix] error "no eslint-plugin-import found" in *1__double_quotes_and_tabs* config
 - [refactor] moved common configs rules to separate file
 - [deps] added peer dependencies from `eslint-plugin-import` and `eslint`
 - [doc] updated installation instructions + added CHANGELOG.md file

1.0.0 / 2017-08-20
==================
 - [new] first version of config
