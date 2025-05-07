const path = require("path");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/, // fit to all .js files
        exclude: /node_modules/, // ignore node_modules
        use: {
          loader: "babel-loader", // use bable loader for transpiling
        },
      },
    ],
  },

  devtool: "source-map", // for readable code in the browser
  // devtool: false, // for readable builded files

  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"), // serving from that directory
    },
  },
};
