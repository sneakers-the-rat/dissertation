const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require( 'path' );

const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  stats: {
    errorDetails: true
  },

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: false,
    liveReload:true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test:/\.(s[ac]ss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', // Fix font paths
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },

})
