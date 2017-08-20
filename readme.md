# Common information

There is two configs, based on [airbnb config](https://github.com/airbnb/javascript):

1. _1\_\_double\_quotes\_and\_tabs_ with tab indentations and double quotes for strings.
2. _2\_\_single\_quotes\_and\_spaces_ with 4 spaces indentatios and single quotes for strings.

# How to install

1. ``` npm install --save-dev eslint eslint-plugin-import git+https://github.com/avasuro/eslint-config.git ```
2. Create _.eslintrc_ in the root of the project with the following content:
    ```
    {
        "extends": "./node_modules/avasuro-eslint-config/{config_folder}/.eslintrc",
    }
     ```
    where {config_folder} should be replaced with **1__double_quotes_and_tabs** to use config #1, or **2__single_quotes_and_spaces** to use config #2.
3. Eslint configuration can be extended. For example, to add support browser properties and methods, property browser = true should be added to the "env" section of the config:
    ```
    {
        "extends": "./node_modules/avasuro-eslint-config/{config_folder}/.eslintrc",
        "env": {
            "browser": true
        }
    }
     ```

Also there is the _.editorconfig_ file in the folder of each config. It can be used to set needed settings in your IDE (like proper indentation, line endings, etc.). To make it work just put it in the root of your project. Also some IDE recognize the file only after install a plugin (see [editorconfig.org](http://editorconfig.org/#download) for more information).
