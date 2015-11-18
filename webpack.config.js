var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.join(ROOT_PATH, 'app');
var DIST_PATH = path.join(ROOT_PATH, 'dist');
var BUILD_PATH = path.join(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;
var common = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery',
        include: DIST_PATH
      },

      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff", include: DIST_PATH },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream", include: DIST_PATH },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file", include: DIST_PATH },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml", include: DIST_PATH },

      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [APP_PATH, DIST_PATH]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Earnest UI Challenge'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
