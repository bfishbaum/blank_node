var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
    entry : './client/index.js',
    output : {
        publicPath: '/',
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.(jsx)$/, 
                loader:'babel-loader',
                options: {presets:['@babel/preset-react', '@babel/preset-env']}
            },
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './client/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    }
};