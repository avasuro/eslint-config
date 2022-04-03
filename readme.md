How to install
==================

1. Install dependencies:
  
   Common (should be installed in any case):
   
   ```npm install --save-dev eslint eslint-plugin-import```

   React-specific (required if you are using react):

   ```npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks```

   Typescript-specific (required if you are using typescript):
   
   ```npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript``` 

2. Install config:

   ```npm install --save-dev eslint-config-avasuro```

3. Create `.eslintrc.js` in the project root with the following content:
 
```javascript
    const avasuroEslint = require('eslint-config-avasuro');
    const {INDENT, QUOTES, PLUGINS} = require('eslint-config-avasuro/constants');
   
    module.exports = {
        extends: [
           avasuroEslint({
                config: {
                    indent: INDENT.SPACES_2, // <- use 2-spaces indentation
                    quotes: QUOTES.SINGLE // <- use single quotes
                },
                plugins: [
                    PLUGINS.CORE,
                    // PLUGINS.REACT, // <- uncomment to turn on rules for React
                    // PLUGINS.TYPESCRIPT // <- uncomment to run on rules for Typescript
                ]
            })
        ]
    };
```

API
==================

Constructor `avasuroEslint` expects an object as first argument which can have only three props: `config`, `plugins` and `env`

#### env

Environment, in which eslint works. Can be `development` and `production`.
Value `development` allows to reduce severity level of some rules (`warn` instead of `error`).
This features allows to not break the build in development if some rule (e.g. [no-debugger](https://eslint.org/docs/rules/no-debugger)) throws an error.

Example of usage with `create-react-app`:
```javascript
// Here assume that create-react-app is used (so process.env.NODE_ENV is defined properly):
module.exports = {
    extends: [
      avasuroEslint({
         env: process.env.NODE_ENV, // <- use current env variable to control severity level of some rules
         config: { /*...*/ },
         plugins: [ /*...*/ ]
      })
   ]
};
```

Example of usage - always development mode:
```javascript
const {ENVS} = require('eslint-config-avasuro/constants');

module.exports = {
   extends: [
      avasuroEslint({
         env: ENVS.DEVELOPMENT,
         config: { /*...*/ },
         plugins: [ /*...*/ ]
      })
   ]
};
```


#### config

Props:

| Prop   	   | Possible value  	    | 	Default value          |
|------------|----------------------|-------------------------|
| indent   	 | 'tab', number      	 | 4                     	 |
| quotes   	 | 'single', 'double' 	 | 'single'              	 |

#### plugins

Array of additional plugins. Used when it is needed to connect additional esilnt rules, e.g. for React or Typescript

Possible values: 'core', 'react', 'typescript'
