/* eslint-disable */
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: ["./src/index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true,
        },
        overlay: true,
        hotOnly: true,
    },
    module: {
        rules: [
            {
                exclude: /node_modules|packages/,
                test: /\.js$/,
                use: "babel-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "🔥 Reloading",
            template: "./static/index.html",
        }),
        new webpack.NamedModulesPlugin(),
    ],
}
