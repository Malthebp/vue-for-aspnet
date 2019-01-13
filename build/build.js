var webpack = require("webpack");
var devEnv = require("./../config/webpack.dev.config.js");
var prodEnv = require("./../config/webpack.prod.config.js");
const express = require("express");
const app = express();
const serverPath = "../../VueTest/dist";
const port = 3000;

const nodeEnv = process.env.NODE_ENV || "development";
const config = nodeEnv === "production" ? prodEnv : devEnv;

var compiler = webpack(config, (err, stats) => {
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + "\n\n"
  );
});

// var devMiddleware = require("webpack-dev-middleware")(compiler.compiler, {
//   publicPath: "/",
//   quiet: true
// });

// app.use(devMiddleware);

// var _resolve;
// var readyPromise = new Promise(resolve => {
//   _resolve = resolve;
// });

// var uri = "http://localhost:" + port;

// console.log("> Starting dev server...");
// devMiddleware.waitUntilValid(() => {
//   console.log("> Listening at " + uri + "\n");

//   _resolve();
// });

// const server = app.listen(port);

// module.exports = {
//   ready: readyPromise,
//   close: () => {
//     server.close();
//   }
// };
