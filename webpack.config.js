const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    jquery: './js/jquery.min.js',
    main: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname, 'src/blocks/'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  devServer:{
    port: 4200
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './test.pug',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[{
        from: path.resolve(__dirname, 'src/img/logo.svg'),
        to: path.resolve(__dirname, 'dist/img')
      }]
    }),
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.s[a|c]ss$/,
        use: ['css-loader','sass-loader']
      },
      {
        test:/\.(ttf|woff|woff2|eot|otf)$/,
        use:['file-loader']
      },
      {
        test:/\.(png|jpg|svg|gif|)$/,
        use:['file-loader']
      },
      {
        test: /\.pug$/,
        use:['pug-loader']
      },

    ]
  }
}