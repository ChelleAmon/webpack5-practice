const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'dog': './src/dog.js'
    },
    output: {
        filename: '[name].[contenthash].js', //[id]- hash version of the filename from entry object; [name]-readable
        path: path.resolve(__dirname, './dist'), //output.path folder
        publicPath: ''
        // publicPath: 'http://some-cdn.com'
    },
    mode: 'production', 
    optimization: {
        splitChunks: {
            chunks: 'all', // choose which chunks you want to optimize
            minSize: 3000,
        }
    },
    module: {
        //import an image file
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize:  3 * 1024 // 3 kilobytes
                    } // condition based on which webpage decides if it should use asset inline or as a resource
                } // accepts a JS object as a value
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },// will read the text file as a javascript string with those contents
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ], // converts ECMASCRIPT to its older version
                        plugins: [ '@babel/plugin-proposal-class-properties' ] // 
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [ //removes old files before Webpack generates the new files
                '**/*', //means remove all the files together with subdirectories inside the output.path.folder
                path.join(process.cwd(), 'build/**/*') // removes all files inside the build folder
            ]
        }),
        new HtmlWebpackPlugin({ //pass additional options, e.g. specify a custom title. You can create your own html template while customizing the options from this plugin
            filename: 'hello-world.html',
            chunks : ['hello-world'], //array object
            title: "Hello World 2",
            template: 'src/page-template.hbs',
            // filename: 'subfolder/custom_filename.html', // customize subfolder and its customized html name
            description: 'Hello World',
            minify: false
        }),
        new HtmlWebpackPlugin({ //pass additional options, e.g. specify a custom title. You can create your own html template while customizing the options from this plugin
            filename: 'dog.html',
            chunks : ['dog'], //array object
            title: "Dog",
            template: 'src/page-template.hbs',
            // filename: 'subfolder/custom_filename.html', // customize subfolder and its customized html name
            description: 'Dog',
            minify: false
        }),
    ]
}