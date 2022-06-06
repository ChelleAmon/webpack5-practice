//Basic webpack configuration

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
                type: 'asset/resource'
            }
        ]
    }
}