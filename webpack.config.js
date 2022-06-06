//Basic webpack configuration

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    module: {
        //import an image file
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/inline'
            }
        ]
    }
}