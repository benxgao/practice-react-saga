const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

//https://www.robinwieruch.de/webpack-setup-tutorial
module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
    main: ['babel-polyfill', path.join(__dirname, 'src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    // new ExtractTextPlugin("style.css"),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  autoprefixer({
                    browsers: ['last 3 versions']
                  })
                ];
              }
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$|\.woff2$/,
        use: ['file-loader']
      },
    ],
  }
};
