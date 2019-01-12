var webpack = require("webpack");
var devEnv = require("./../config/webpack.dev.config.js");
var prodEnv = require("./../config/webpack.prod.config.js");

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
