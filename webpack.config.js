const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{loader: MiniCssExtractPlugin.loader},'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    // loader: 'url-loader',
                    options: {
                      outputPath: 'images/',
                      name: '[name].[ext]',
                    },
                  },
                  'image-webpack-loader'
                ],
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['./dist']
        })
    ]
};