const assert = require('assert');
const PARAMS = require('./constants');

class ConfigError extends TypeError {
    constructor(message) {
        super(`\n\nConfig: ${message}\nSee doc for available config options: https://github.com/avasuro/eslint-config#readme \n\n`);
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        // This clips the constructor invocation from the stack trace.
        // It's not absolutely essential, but it does make the stack trace a little nicer.
        //  @see Node.js reference (bottom)
        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = {
    validatePlugins(plugins) {
        plugins.forEach(plugin => {
            assert(
                Object.values(PARAMS.PLUGINS).includes(plugin),
                new ConfigError(`Unknown plugin "${plugin}". Supported plugins: ["${Object.values(PARAMS.PLUGINS).join('", "')}"]`)
            )
        });
    },
    validateConfig(config) {
        assert(
            Object.values(PARAMS.INDENT).includes(config.indent),
            new ConfigError(`invalid parameter "indent". Expected one of: ["${Object.values(PARAMS.INDENT).join('", "')}"]; Received: "${String(config.indent)}"`)
        );
        assert(
            Object.values(PARAMS.QUOTES).includes(config.quotes),
            new ConfigError(`invalid parameter "quotes". Expected one of: ["${Object.values(PARAMS.QUOTES).join('", "')}"]; Received: "${String(config.quotes)}"`)
        );
    },
    validateEnv(env) {
        // any env will work
    }
}