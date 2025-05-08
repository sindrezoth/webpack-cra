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

  output: {
    assetModuleFilename: "img/[hash][ext][query]", // put imgs inside some dir (img in that case)
  },

  module: {
    rules: [
      {
        test: /.(png|gif|jpe?g|svg)/i, // make imgs available

        type: "asset", // automatic determine whether it should be like a module and whether it should be like an inline based on maxSize (8kb)
        // type: "asset/resource", // genrate paths to the imgs inside code
        // type: "asset/inline", // place whole image inside code but not import it as path (imgs do not appear inside dist folder)

        /* // make maxSize bigger
        parser: {
          dataUrlCondition: {
            maxSize: 130 * 1024,
          },
        }, */
      },
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
