const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    output: {
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "images/[hash][ext][query]",
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: (module) => {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendor/${packageName.replace("@", "")}`;
                    },
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            exportLocalsConvention: "camelCase",
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            localIdentContext: path.resolve(__dirname, "src"),
                        },
                    },
                },
                "sass-loader",
            ],
        }, ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
        new Dotenv({
            path: "./prod.env",
        }),
    ],
});