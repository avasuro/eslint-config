const crypto = require('crypto');
const fs = require('fs')
const path = require('path');
const pjson = require('./package.json');

const CACHE_DIR = path.join(__dirname, '.cache');

/**
 * Currently ESLint supports only strings and doesn't support configuration objects and config generators
 * in "extends" property of config (but their support is planned in future ESLint versions).
 * So this function is some sort of hack - it takes configuration object, and saves it in cache folder, and
 * returns absolute path to this package, so it can be used in "extends" property of config
 */
module.exports = (configGenerator) => (...generatorParams) => {
    // Determine name of cached file with config:
    const fileHash = crypto
        .createHash('md5')
        .update(JSON.stringify(generatorParams || {}))
        .digest("hex");
    const fileName = `${pjson.version}-${configGenerator.name}-${fileHash}.json`;
    const fullPathToConfig = path.join(CACHE_DIR, fileName);

    // Create cached file with config if it doesn't exists yet:
    if (!fs.existsSync(fullPathToConfig)) {
        const config = configGenerator(...generatorParams);
        fs.mkdirSync(CACHE_DIR, {recursive: true});
        fs.writeFileSync(fullPathToConfig, JSON.stringify(config, null, 2));
    }

    // Return path to config file:
    return fullPathToConfig;
};
