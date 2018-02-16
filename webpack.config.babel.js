/* eslint-disable */

const webpack = require("webpack")
const path = require("path")

const APP_DIR = path.join(__dirname, "src")

module.exports = {
  entry: [APP_DIR + "/index.js"],

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-router-dom": {
      root: "ReactRouterDom",
      commonjs2: "react-router-dom",
      commonjs: "react-router-dom",
      amd: "recompose"
    }
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  output: {
    path: path.join(__dirname, "lib"),
    filename: "react-router-scroll-top.js",
    libraryTarget: "umd"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [new webpack.NoEmitOnErrorsPlugin()]
}
