const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'), //output.path folder
        publicPath: ''
        // publicPath: 'http://some-cdn.com'
    },
    mode: 'development', 
    devServer: {
        port: 3501,
        static: {
            directory: path.resolve(__dirname, './dist'), //tell where dev-server should run 
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true // webpack saves the generated file to disk 
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
                    'style-loader', 'css-loader'
                ]
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
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [ //removes old files before Webpack generates the new files
                '**/*', //means remove all the files together with subdirectories inside the output.path.folder
                path.join(process.cwd(), 'build/**/*') // removes all files inside the build folder
            ]
        }),
        new HtmlWebpackPlugin({ //pass additional options, e.g. specify a custom title. You can create your own html template while customizing the options from this plugin
            title: "Hello World 2",
            template: 'src/index.hbs',
            // filename: 'subfolder/custom_filename.html', // customize subfolder and its customized html name
            description: 'I am testing with another description'
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: ['node_modules']      
    }
}