# WEBPACK 5

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

