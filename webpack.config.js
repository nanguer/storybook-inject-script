const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/injectScript.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    library: "injectScript",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    compress: true,
    port: 9000,
  },
};
