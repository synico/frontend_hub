const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      path.join(process.cwd(), 'src/index.js')
    ],
    print: [
      path.join(process.cwd(), 'src/print.js')
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
//    hot: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
//      title: 'Hot Module Replacement'
      title: 'Development'
    }),
//    new webpack.NamedModulesPlugin(),
//    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
//    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

