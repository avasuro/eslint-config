Common information
==================

There is two configs, based on [airbnb config](https://github.com/airbnb/javascript):

1. **1__double_quotes_and_tabs.js** - with tab indentations and double quotes for strings.
2. **2__single_quotes_and_spaces** - with 4 spaces indentations and single quotes for strings.

How to install
==================

1. Install peer dependencies:
   
   ```npm install --save-dev eslint eslint-plugin-import```

2. Install config (pay attention at the config version at the end of URL):

   ```npm install --save-dev eslint-config-avasuro```

3. Create .eslintrc in the root of the project with the following content:
    ```
    {
        "extends": "eslint-config-avasuro/{config_name}",
    }
     ```
    where {config_name} can be one of the following:
    
    - **1__double_quotes_and_tabs** - tab indentations and double quotes for strings
    - **2__single_quotes_and_spaces** - 4 spaces indentations and single quotes for strings
