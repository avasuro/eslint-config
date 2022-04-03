const {ENVS, PLUGINS, INDENT, QUOTES} = require('./constants');
const configToPathString = require('./configToPathString');
const {validateConfig, validatePlugins, validateEnv} = require('./validation');
const configCore = require('./core');
const configReactCore = require('./react/core');
const configReactHooks = require('./react/hooks');
const configReactA11y = require('./react/a11y');
const configTypescript = require('./typescript');



function config({env = ENVS.PRODUCTION, plugins = [PLUGINS.CORE], config = {}} = {}) {
    if (!config.indent) config.indent = INDENT.SPACES_4;
    if (!config.quotes) config.quotes = QUOTES.SINGLE;

    validatePlugins(plugins);
    validateConfig(config);
    validateEnv(env);

    const baseConfig = configCore(config, env);
    const baseConfigRules = require(baseConfig).rules;

    return {
        extends: [
            // include base config always:
            baseConfig,
            // include react configs if needed:
            ...(plugins.includes(PLUGINS.REACT) ? [
                configReactCore({
                    indent: config.indent,
                    dangleRules: baseConfigRules['no-underscore-dangle']
                }, env),
                configReactHooks(),
                configReactA11y(),
            ] : []),
            // include typescript config if needed:
            ...(plugins.includes(PLUGINS.TYPESCRIPT) ? [
                configTypescript({
                    indent: baseConfigRules.indent,
                    importExtensions: baseConfigRules['import/extensions'],
                    braceStyle: baseConfigRules['brace-style'],
                    commaSpacing: baseConfigRules['comma-spacing'],
                    defaultParamLast: baseConfigRules['default-param-last'],
                    funcCallSpacing: baseConfigRules['func-call-spacing'],
                    noArrayConstructor: baseConfigRules['no-array-constructor'],
                    noDupeClassMembers: baseConfigRules['no-dupe-class-members'],
                    noEmptyFunction: baseConfigRules['no-empty-function'],
                    noExtraParens: baseConfigRules['no-extra-parens'],
                    noExtraSemi: baseConfigRules['no-extra-semi'],
                    noMagicNumbers: baseConfigRules['no-magic-numbers'],
                    noRedeclare: baseConfigRules['no-redeclare'],
                    noShadow: baseConfigRules['no-shadow'],
                    noUnusedExpressions: baseConfigRules['no-unused-expressions'],
                    noUnusedVars: baseConfigRules['no-unused-vars'],
                    noUseBeforeDefine: baseConfigRules['no-use-before-define'],
                    noUselessConstructor: baseConfigRules['no-useless-constructor'],
                    quotes: baseConfigRules.quotes,
                    requireAwait: baseConfigRules['require-await'],
                    noReturnAwait: baseConfigRules['no-return-await'],
                    semi: baseConfigRules.semi,
                    spaceBeforeFunctionParen: baseConfigRules['space-before-function-paren']
                })
            ] : [])
        ].filter(Boolean)
    };
}

module.exports = configToPathString(config);
