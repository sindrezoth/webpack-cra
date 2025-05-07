const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        //test: /.c([a|s])?ss/
        test: /.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/, // fit to all .js files
        exclude: /node_modules/, // ignore node_modules
        use: {
          loader: "babel-loader", // use bable loader for transpiling
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map", // for readable code in the browser
  // devtool: false, // for readable builded files

  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, "./dist"), // serving from that directory
    },
  },
};
