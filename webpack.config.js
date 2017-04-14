const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  watch: true,
  bail: true,
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "./build/main.js",

  },
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0']
            }
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader"
      // },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader']
      //   })
      // },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('./build/style.css')
  ],
};

module.exports = config;