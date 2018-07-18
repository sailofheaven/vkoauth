const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    resolve: {
        extensions: ['.js', '.jsx' ],
        alias: {
            /*Components: path.resolve(__dirname, "src/components/"),
            Containers: path.resolve(__dirname, "src/containers/"),
            Actions: path.resolve(__dirname, "src/actions/"),*/
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin
    ],
    /*devServer: {
        historyApiFallback: true,
        publicPath: '/',
        hot: true
      }*/
};