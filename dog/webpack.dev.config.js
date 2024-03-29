const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/dog.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'), 
        publicPath: 'http://localhost:9002/'
        // publicPath: 'http://some-cdn.com'
    },
    mode: 'development', 
    devServer: {
        port: 9002,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'dog.html',
            writeToDisk: true 
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
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ]
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
        new HtmlWebpackPlugin({ 
            filename: 'dog.html',
            title: "Dog",
            template: 'src/page-template.hbs',
            // filename: 'subfolder/custom_filename.html', // customize subfolder and its customized html name
            description: 'Dog'
        }),
        new ModuleFederationPlugin({
            name: "DogApp",
            filename: 'remoteEntry.js',
    //Dog App serves as both a hosted application for Image Caption and used as a federal module in dashboard
            exposes: {
                './DogPage': './src/components/dog-page/dog-page.js'
            }, 
            remotes: { 
                ImageCaptionApp: 'ImageCaptionApp@http://localhost:9003/remoteEntry.js'
            }
        })
    ],
}