const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
    entry: './src/dog.js',
    output: {
        filename: '[name].[contenthash].js', //[id]- hash version of the filename from entry object; [name]-readable
        path: path.resolve(__dirname, './dist'), //output.path folder
        publicPath: 'http://localhost:9002/'
        // publicPath: 'http://some-cdn.com'
    },
    mode: 'production', 
    optimization: {
        splitChunks: {
            chunks: 'all', // choose which chunks you want to optimize
            minSize: 10000,
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize:  3 * 1024 // 3 kilobytes
                    } 
                } 
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
                        presets: [ '@babel/env' ], 
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //pass additional options, e.g. specify a custom title. You can create your own html template while customizing the options from this plugin
            filename: 'dog.html',
            title: "Dog",
            template: 'src/page-template.hbs',
            description: 'Dog',
            minify: false
        }),
        new ModuleFederationPlugin({
            name: "DogApp",
            filename: 'remoteEntry.js',
            exposes: {
                './DogPage': './src/components/dog-page/dog-page.js'
            },
            remotes: { 
                ImageCaptionApp: 'ImageCaptionApp@http://localhost:9003/remoteEntry.js'
            }
        })
    ]
}