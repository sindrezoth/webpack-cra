const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web"; // for hot updating

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist"; // for minfied version of bundles
}

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /.(s[ca]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/, // fit to all .js files
        exclude: /node_modules/, // ignore node_modules
        use: {
          loader: "babel-loader", // use bable loader for transpiling
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()], // make a one .css bundle of styles

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map", // for readable code in the browser
  // devtool: false, // for readable builded files

  devServer: {
    hot: true, // hot update (reload)
    static: {
      directory: path.resolve(__dirname, "./dist"), // serving from that directory
    },
  },
};
