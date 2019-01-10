var path = require("path");
var webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

var serverPath = "../../VueTest/dist";
var clientPath = "../src/index.js";
const watch = process.env.NODE_ENV !== "production";
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  watch,
  entry: {
    vue: "vue",
    index: path.resolve(__dirname, clientPath)
  },
  output: {
    path: path.resolve(__dirname, serverPath),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: [
              "vue-style-loader",
              {
                loader: "css-loader"
              }
            ],
            js: ["babel-loader"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        // This is required for other javascript modules you are gonna write besides vue.
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          path.resolve("src"),
          path.resolve("node_modules/webpack-dev-server/client")
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
