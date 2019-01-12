var path = require("path");
const webpack = require("webpack");
var merge = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");

module.exports = merge(webpackConfig, {
  optimization: {
    minimize: true
  },
  plugins: []
});
