const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const merge = require("webpack-merge");

const serverPath = "../../VueTest/dist";
const clientPath = "./../src/index.js";
const styleEntry = "./../src/assets/scss/main.scss";
const imagesEntry = "./../src/assets/images/";
const webpackBase = require("./../NcApp/src/webpack.base.conf");

module.exports = merge(webpackBase, {
  entry: [
    path.resolve(__dirname, clientPath),
    path.resolve(__dirname, styleEntry)
  ],
  output: {
    path: path.resolve(__dirname, serverPath),
    publicPath: path.resolve(__dirname, "public")
  },
  plugins: [
    new webpack.DefinePlugin({
      STORE_PATH: JSON.stringify("../../src/store"),
      SERVER_PATH: serverPath,
      CLIENT_PATH: clientPath,
      COMPONENT_PATH: JSON.stringify("../../src/components/organisms"),
      STYLE_ENTRY: styleEntry,
      IMAGES_ENTRY: imagesEntry
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, imagesEntry),
        to: "images",
        ignore: [".*"]
      }
    ])
  ]
});
