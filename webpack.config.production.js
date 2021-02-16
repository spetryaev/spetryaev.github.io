const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    // Webpack configuration goes here
    mode: 'production',
    entry: "./src/index.js",
    output: {
        filename: '[name].[hash].js',
        path: __dirname + "/dist"
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        // We configure 'MiniCssExtractPlugin'              
                        loader: MiniCssExtractPlugin.loader,
                    }, 
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        // Create the stylesheet under 'styles' directory
        new MiniCssExtractPlugin({
            filename: 'styles/styles.[hash].css'
        })
    ],
    optimization: {
        splitChunks: {
        cacheGroups: {
            vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            },
        },
        },
    },
      
};