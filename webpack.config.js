const webpack = require('webpack')
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

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  blocks: path.join(__dirname, './blocks'),
}

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
  const loaders = [
    {
      loader: MiniCssExctractPlugin.loader,
      options: {
        hmr: isDev,
      },
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap:true
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap:true,
        config:{path: 'src/js/postcss.config.js'}
      },
    },
  ]
  if(preproc)
    loaders.push(preproc)
  return loaders
}

const joinPlugins = () => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: './test.pug',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExctractPlugin({
      //filename: `css/${filename('css')}`, не подключает иконки
      filename: `${filename('css')}`,
    }),
    new CopyWebpackPlugin({
      patterns:[{
        from: `${PATHS.src}/img`,
        to: `${PATHS.dist}/img`,
      },
      {
        from: `${PATHS.src}/fonts`,
        to: `${PATHS.dist}/fonts`,
      }]
    }),
  ]


  if (isDev) {
    plugins.push(
      new webpack.SourceMapDevToolPlugin({
        filename:'[file].map',
      })
    )
  }
  return plugins
}

module.exports = {

  externals: {
    paths: PATHS
  },
  context: PATHS.src,
  mode: 'development',
  entry: {
    jquery: './js/jquery.min.js',
    index: PATHS.src,
  },
  output: {
    filename: `js/${filename('js')}`,
    path: PATHS.dist
  },
  optimization: optimization(),
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    port: 8081,
    overlay:{
      warnings: true,
      errors: true,
    },
    hot: isDev,
  },
  plugins: joinPlugins(),
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: '/node_modules/',
        loader: {
          loader: 'babel-loader',
          options:{
            presets:[
              '@babel/preset-env',
            ]
          }
        }
      },
      {
        test:/\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[a|c]ss$/,
        use: cssLoaders({
          loader: 'sass-loader',
          options: {sourceMap:true}
        })
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