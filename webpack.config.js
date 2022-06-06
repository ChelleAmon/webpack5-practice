//Basic webpack configuration

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        //convert to absolute path
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}