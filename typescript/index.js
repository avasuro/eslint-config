const configToPathString = require('../configToPathString');

function configTypescript({
    indent,
    importExtensions,
    braceStyle,
    commaSpacing,
    defaultParamLast,
    funcCallSpacing,
    noArrayConstructor,
    noDupeClassMembers,
    noEmptyFunction,
    noExtraParens,
    noExtraSemi,
    noMagicNumbers,
    noRedeclare,
    noShadow,
    noUnusedExpressions,
    noUnusedVars,
    noUseBeforeDefine,
    noUselessConstructor,
    quotes,
    requireAwait,
    noReturnAwait,
    semi,
    spaceBeforeFunctionParen
}) {
    return {
        overrides: [
            {
                files: ['**/*.ts?(x)'],
                plugins: ['@typescript-eslint'],
                parser: '@typescript-eslint/parser',
                parserOptions: {
                    warnOnUnsupportedTypeScriptVersion: true,
                    project: './tsconfig.json'
                },
                settings: {
                    'import/resolver': {
                        typescript: {
                            alwaysTryTypes: true,
                        },
                    },
                },
                rules: {
                    // Fix error "missing file extension" in import of typescript files:
                    'import/extensions': [
                        importExtensions[0],
                        importExtensions[1],
                        {
                            ...importExtensions[2],
                            ts: 'never',
                            tsx: 'never'
                        }
                    ],

                    // Fix brace style:
                    'brace-style': 'off',
                    '@typescript-eslint/brace-style': braceStyle,
                    // Fix comma-spacing:
                    'comma-spacing': 'off',
                    '@typescript-eslint/comma-spacing': commaSpacing,
                    // Fix default param last:
                    "default-param-last": "off",
                    "@typescript-eslint/default-param-last": defaultParamLast,
                    // Fix func call spacing:
                    'func-call-spacing': 'off',
                    '@typescript-eslint/func-call-spacing': funcCallSpacing,
                    // Fix indentation:
                    indent: 'off',
                    '@typescript-eslint/indent': indent,
                    // Fix deprecation of array constructor:
                    'no-array-constructor': 'off',
                    '@typescript-eslint/no-array-constructor': noArrayConstructor,
                    // Fix no dupe class members:
                    'no-dupe-class-members': 'off',
                    '@typescript-eslint/no-dupe-class-members': noDupeClassMembers,
                    // Fix no empty function:
                    'no-empty-function': 'off',
                    '@typescript-eslint/no-empty-function': noEmptyFunction,
                    // Fix no extra parens:
                    'no-extra-parens': 'off',
                    '@typescript-eslint/no-extra-parens': noExtraParens,
                    // Fix no extra semi:
                    'no-extra-semi': 'off',
                    '@typescript-eslint/no-extra-semi': noExtraSemi,
                    // Fix no magic numbers
                    'no-magic-numbers': 'off',
                    '@typescript-eslint/no-magic-numbers': [
                        noMagicNumbers[0],
                        {
                            ...noMagicNumbers[1],
                            ignoreEnums: true,
                            ignoreNumericLiteralTypes: true,
                            ignoreReadonlyClassProperties: true
                        }
                    ],
                    // Fix no shadow:
                    'no-shadow': 'off',
                    '@typescript-eslint/no-shadow': noShadow,
                    // Fix no unused expressions:
                    'no-unused-expressions': 'off',
                    '@typescript-eslint/no-unused-expressions': noUnusedExpressions,
                    // Fix no unused vars:
                    'no-unused-vars': 'off',
                    '@typescript-eslint/no-unused-vars': noUnusedVars,
                    // Fix no use before define:
                    'no-use-before-define': 'off',
                    '@typescript-eslint/no-use-before-define': noUseBeforeDefine,
                    // Fix no useless constructor:
                    'no-useless-constructor': 'off',
                    '@typescript-eslint/no-useless-constructor': noUselessConstructor,
                    // Fix quotes:
                    quotes: 'off',
                    '@typescript-eslint/quotes': quotes,
                    // Fix require await:
                    'require-await': 'off',
                    '@typescript-eslint/require-await': requireAwait,
                    // Fix false-positive redeclarations in typescript:
                    "no-redeclare": "off",
                    "@typescript-eslint/no-redeclare": noRedeclare,
                    // Fix no return await:
                    'no-return-await': 'off',
                    '@typescript-eslint/return-await': noReturnAwait,
                    // Fix semi:
                    semi: 'off',
                    '@typescript-eslint/semi': semi,
                    // Fix space before function paren:
                    'space-before-function-paren': 'off',
                    '@typescript-eslint/space-before-function-paren': spaceBeforeFunctionParen,
                    // Disable jsdoc validation, jsdoc is not necessary with typescript:
                    'valid-jsdoc': 'off',
                    // Using TypeScript makes it safe enough to disable import resolution:
                    'import/no-unresolved': 'off',
                    // Disable default props checking since they are not required in typescript:
                    'react/require-default-props': 'off',
                    // Disable react prop-types (not required in typescript project):
                    'react/prop-types': 'off',
                }
            }
        ]
    }
}

module.exports = configToPathString(configTypescript);