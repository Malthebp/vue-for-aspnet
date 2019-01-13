const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const watch = process.env.NODE_ENV !== "production";
const devMode = mode !== "production";

module.exports = {
  mode,
  watch,
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  output: {
    filename: "app.[id].js"
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "babel-plugin-root-import",
                {
                  rootPathPrefix: "@",
                  rootPathSuffix: "src"
                }
              ],
              "@babel/plugin-syntax-dynamic-import"
            ]
          }
        },
        include: [
          path.resolve("src"),
          path.resolve("node_modules/webpack-dev-server/client")
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "css/app.[name].css" : "css/app.[name].[hash].css",
      chunkFilename: devMode ? "css/[id].css" : "css/[id].[hash].css"
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
};
