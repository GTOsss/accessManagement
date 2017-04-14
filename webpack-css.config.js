var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    posts: "./src/index.js",
  },
  output: {
    filename: "./build/indexStyle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  node: {
    fs: "empty"
  }
}