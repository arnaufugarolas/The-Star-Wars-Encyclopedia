const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const DotEnv = require('dotenv-webpack')

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules|\.yarn/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules|\.yarn/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: /node_modules|\.yarn/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|json)$/,
          exclude: /node_modules|\.yarn/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        manifest: './public/manifest.json',
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new DotEnv()
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      fallback: {
        url: require.resolve('url/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        buffer: require.resolve('buffer/'),
        events: require.resolve('events/'),
        fs: false,
        child_process: false,
        util: require.resolve('util/'),
        path: require.resolve('path-browserify'),
        querystring: require.resolve('querystring-es3')
      }
    },
    devServer: {
      compress: true,
      port: 9000,
      hot: true
    }
  }
}
