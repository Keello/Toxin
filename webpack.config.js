const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExctractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('IS DEV:', isDev)

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    }
  }

  if(isProd){
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserWebpackPlugin(),
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = preproc => {
  const loaders = [MiniCssExctractPlugin.loader, 'css-loader']
  if(preproc)
    loaders.push(preproc)
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    jquery: './js/jquery.min.js',
    main: './index.js',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname, 'src/blocks/'),
      //images: path.resolve(__dirname, 'src/img/'),
    }
  },
  optimization: optimization(),
  devServer:{
    port: 8080
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './test.pug',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[{
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'dist/img')
      },
      {
        from: path.resolve(__dirname, 'src/fonts'),
        to: path.resolve(__dirname, 'dist/fonts')
      }]
    }),
    new MiniCssExctractPlugin({
      filename: filename('css'),
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[a|c]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test:/\.(ttf|woff|woff2|eot|otf)$/,
        loader:'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test:/\.(png|jpg|svg|gif|)$/,
        loader:'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.pug$/,
        use:['pug-loader']
      },

    ]
  }
}