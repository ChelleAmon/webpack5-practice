# WEBPACK 5
Github repository: [Udemy Course](https://github.com/vp-online-courses/webpack-tutorial)

## Asset Modules
* It imports images, fonts and txt files
  
### Types:
* Asset/Resource
* Asset/Inline
* General Asset type
* Asset/Source

## Loader Module
* imports other files, such as dependencies, CSS, SASS, LESS, XML
* JS libraries that import all other files

## Plugins
* Are additional JS libraries that do everything that loaders cannot do
* Plugins can also modify how the bundles themselves are created
* Example: uglifyJSPLugin - takes the bundle.js and minimizes the contents to decrease the bundle size
* you can define global constants across the whole application
* minimify resulting bundle to decrease load time
* Webpack plugin is a development dependency because we only need it during build process. It is not needed during production depenedeces 

plugins: [
    new PluginName()
]

**Why Minify**
* if we make the JS file smaller, it will load faster
* it will help decrease network traffic
* On this project, TerserPlugin will be used to minify the JS bundles (Webpack v5 comes with the latest terser-webpack-plugin out of the box, no need to install them)

## Browser Caching
* Each time the user reloads the page, their browser downloads all those files from the internet, it might be an issue for some user who might access the page on their mobile and has slow internet connection
* Solution: Broswe caching
* If the file did not change and user reload the page, browser will save the files into a specific place (cache)
* What if the JS file has changed? User might not get the updated version of that JS file. Solution: change the name of the JS file and webpack does it automatically

    * webpack.config.js => output => filename: 'bundle.[contenthash].js' (MD5 hash)


## How to clean dist folder before generating new bundles
* Plugin: __CleanWebpackPlugin__
* This plugin will clean the outputPath folder everytime you generate a new bundle
* simply remove all files from the dist folder
* You need to provide some options when instantiating the plugin as well if you want the plugin to clean multiple folders
   
* Options: 
    * cleanOnceBeforeBuildPatterns: => array object, removes old files before webpack generates the new files


## Generating HTML Files Automatically During Webpack Build Process
* Plugin: HtmlWebpackPlugin => A special plugin that can create the whole HTML for us

## Creating your own HTML files

**[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)**

**Template Options**
* pug
* ejs
* underscore
* handlebars
* html-loaders
* ...

**Handlebars**
* [Handlebars](https://handlebarsjs.com/)

* template engine for JS that separates from business logic to presentation
* file format: index.hbs

## More Webpack Plugins
* [Webpack plugins](webpack.js.org/plugins/)

## Production vs Development Builds
* Production builds require a different setup than development builds
* Production build: website should be as fast as possible, and our bundles should be as small as possible
* Development build: we want to see an additional information inside our JS code

### 'Mode' Option
* an option available in webpack configuration
* it enables certain built-in optimizations for production and development builds
* became available from webpack 4
* 3 values: 'none', 'development', 'production'

    * **Production**
      * enables quite a long list of different plugins including TerserPlugin
      * [Click here to check the full list of plugins for production mode](https://webpack.js.org/configuration/mode)
      * When it throws an error, it reads the error from the bundle.js, and when you inspect it from console, the code is not readable and it does not go to the specific line
  
    * **Development**
      * It throws error from index.js, which is a readable verion of the source file and it goes to the specific line
      * development mode uses source map by default 


## Multiple Page Application
* how to split code into multiple bundles

* **Chunks**
  * special HtmlWebpackPlugin option where we can specify which bundles we need to include where
  * chunk names are specified in the entry point object

* **Optimization**
  * extracting dependencies while code splitting
  * add optimization as JS object under mode option. Specify which chunks you want to optimize. 
  * This option will help building the dist files without including the dependencies which will increase the JS size significantly if  not optimized.
  * In the given example, when we run the npm script for production, it creates a separate bundle for lodash library which will be cached, so if users will reload your page, it will only download your code, and not including the cached lodash library bundle

* Setting Custom Options for Code Splitting
  * default webpack extracts common dependencies only when they exceed 30 kilobytes before minification
  * React library is only less than 30 kbs

  * Customize option: 
    * optimization : {splitChunks : { chunks: 'all', **minSize: 3000**}}, 3000 is equivalent to 3 kb

* **How to Setup Development Configuration for Multiple Page Application**
  * Change entry point object from webpack.dev.config.js
  * Add another HtmlWebpackPlugin and change the names. This is to create two html pages
  * No need to add chunks as it is not needed in development build

    
## Module Federation

* Newly introduced in webpack 5
* Allows one application to dynamically load modules from another application at runtime.
* It allows to create standalone applications that are independent from each other and has their own dependencies.
* Module Federation, when making changes to a component that is rendered on another application, loads the component dynamically during runtime. It will always take the latest version of the component
  

## Micro Frontends

* Useful when each and every page is developed by a different team

## Nested Module Federation

                          _______________________
                          |                     |
                          |       HOST APP      |
                          |_____________________| 
                                    /\
                                   /  \
                __________________/    \_____________________
                |                                            |
                |                                            |
        ________|_________                          _________|___________
        |                 |                         |                    |
        |   MODULE 1      |                         |      MODULE 2      |
        |_________________|                         |____________________|
                                                            /    \
                                                           /      \
                                                          /        \
                                                         /          \
                                                  ______/\_____  ___/\_______
                                                  |           |  |           |
                                                  |  MODULE 3 |  |  MODULE 4 |
                                                  |___________|  |___________| 


## Integrate with JQuery
* has multiple plugins that can be used once imported on the project
* it is more concise that Vanilla JS, but it might be confusing to some people
* Installing Jquery will add another 8KB on the project   

[JQuery](https://jquery.com/)


## ESLint
* Open Source project that provides a pluggable lint
* Highly configurable
* Static analysis of code
  
### Linter
  * Refers to tools that analyze the source code to flag programming errors, bugs, stylistic errors and suspicious constructs
  * warns about syntax errors, undeclared variables, etc


**How to Configure ESLint**
1. `npm install eslint --save-dev` on the root project
2. package.json => script => "lint": "eslint ."
3. create a configuration file named .eslintrc on the root folder to create rules
4. Inside .eslintrc file, add: 
      `{
        "extends": "eslint:recommended"
      }`

    * This configuration will only apply the rules with checkmarks that we see from [here](https://eslint.org/)
    * ESLint checks javascript code against ECMAScript5 standards
    * Since we are using ECMAScript 6, that requires us to configure a couple more options inside ESLint configuration File
  

      `{
        "extends": "eslint:recommended",
        "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module"
        },
        **"env": {
          "node": true,
          "browser": true,
        }**
      }`

5. ESLint will still complain because we implemented class property which is not part of ecmascript5. We need to install babel-eslint to fix that:
   
      * `npm i babel-eslint --save-dev`

      `{
        "extends": "eslint:recommended",
        **"parser": "babel-eslint",**
        "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module"
        },
        "env": {
          "node": true,
          "browser": true,
        }
      }`

6. We need to configure one more rule that checks for a console.log statements. The rule is called "no-console"

      `{
        "extends": "eslint:recommended",
        "parser": "babel-eslint",
        "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module"
        },
        "env": {
          "node": true,
          "browser": true,
        },
        **"rules": {
          "no-console": 0
        }**
      }`





