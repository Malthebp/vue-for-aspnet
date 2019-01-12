var path = require("path");
const webpack = require("webpack");
var merge = require("webpack-merge");
const webpackConfig = require("./webpack.config.js");
const styleEntry = "./../src/assets/scss/main.scss";

module.exports = merge(webpackConfig, {
  resolve: {
    alias: {
      styles: styleEntry
    }
  }
});
