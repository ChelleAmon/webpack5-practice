//Basic webpack configuration

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
        // publicPath: 'http://some-cdn.com'
    },
    mode: 'none',
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
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        })
    ]
}