const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: '[name].[contenthash].js', //[id]- hash version of the filename from entry object; [name]-readable
        path: path.resolve(__dirname, './dist'), //output.path folder
        publicPath: 'http://localhost:9000/'
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ], 
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ //pass additional options, e.g. specify a custom title. You can create your own html template while customizing the options from this plugin
            filename: 'dashboard.html',
            title: "Dashboard",
        }),
        new ModuleFederationPlugin({
            name: "DogApp",
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
                DogApp: 'DogApp@http://localhost:9002/remoteEntry.js'
            }
        })
    ]
}