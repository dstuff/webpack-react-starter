const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: process.env.production ? 'production' : 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                }
            },
            {
                test: /\.(json)$/i,
                type: 'asset/source',
                generator: {
                    filename: 'assets/translations/[name][ext][query]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Awesome app',
            template: './src/index.html',
            filename: "index.html",
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            // eslintPath: 'node_modules/eslint/bin/eslint.js',
            files: [path.resolve(__dirname, 'src/**/*.{ts, tsx})')],
            fix: true,
            exclude: ['node_modules']
        }),
        new StylelintPlugin({
            files: [path.resolve(__dirname, 'src/**/*.{scss})')],
            configFile: './stylelint.config.js',
            fix: true
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/assets', to: 'assets' }]
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    devServer: {
        port: 3000,
        static: './dist'
    },
};