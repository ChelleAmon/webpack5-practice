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

plugins: [
    new PluginName()
]

