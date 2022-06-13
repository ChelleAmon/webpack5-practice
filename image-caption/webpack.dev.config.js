const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/image-caption.js',
    output: {
        filename: '[name].bundle.js', //[name], a placeholder
        path: path.resolve(__dirname, './dist'), //output.path folder
        publicPath: 'http://localhost:9003/'
        // publicPath: 'http://some-cdn.com'
    },
    mode: 'development', 
    devServer: {
        port: 9003,
        static: {
            directory: path.resolve(__dirname, './dist'), //tell where dev-server should run 
        },
        devMiddleware: {
            index: 'image-caption.html',
            writeToDisk: true // webpack saves the generated file to disk 
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ], // converts ECMASCRIPT to its older version
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //pass additional options, e.g. specify a custom title. You can create your own html template while customizing the options from this plugin
            filename: 'image-caption.html',
            title: "Image Caption",
            template: 'src/page-template.hbs',
            description: 'Image Caption'
        }),
        new ModuleFederationPlugin({
            name: 'ImageCaptionApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ImageCaption': './src/components/image-caption/image-caption.js',
            }
        })
    ],
}