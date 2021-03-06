module.exports = {
    extends: './0__common-config.js',
    rules: {
        /*
        |--------------------------------------------------------------------------
        | ERRORS
        |--------------------------------------------------------------------------
        */

        // disallow double-negation boolean casts in a boolean context
        // http://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'warn',

        // disallow unnecessary parentheses
        // http://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': ['error', 'all'],


        /*
        |--------------------------------------------------------------------------
        | STYLE
        |--------------------------------------------------------------------------
        */

        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        indent: ['error', 'tab', {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            // CallExpression: {
            // parameters: null,
            // },
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],

        // specify whether double or single quotes should be used
        quotes: ['error', 'double', {avoidEscape: true}]
    }
};
