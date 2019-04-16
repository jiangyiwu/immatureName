const path = require('path'); //nodejs的语法，引入路径模块，为了输出的时候找绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/main.js',  //入口文件为main.js
  },
  output: {   //输出
    path: path.resolve(__dirname, 'dist'),    //path.resolve为nodejs的固定语法，用于找到当前文件的绝对路径
    filename: '[name].bundle.js'    //输出的文件名
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*'], {
      root: __dirname, // 根目录
      verbose: true, // 开启在控制台输出信息
      dry: false // 启用删除文件
    }),
    new HtmlWebpackPlugin({
      title: 'test1',
      template: './src/template.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    new webpack.HotModuleReplacementPlugin(),   //引入热更新插件
    // new HtmlWebpackPlugin({
    //   template: 'html-withimg-loader!' + path.resolve(__dirname, '/src/template.html'),
    //   filename: '/src/template.html'
    // }),
  ],

  devServer: {
    host: 'localhost',   //服务器的ip地址
    port: 2019,  //端口
    open: false,  //自动打开页面
    hot: true
  },

  module: {
    rules: [
      // {
      //   test: /\.(jsx|js)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     } 
      //   }
      // },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',    //把图片转成base64
            options: {
              limit: 30 * 1024,  //小于30k就会转成base64
              outputPath: '/images/'
            }
          }
        ]
      },
      {
        test: '/\.(html|htm)$/g',
        use: ['html-withimg-loader']
      }
    ]
  }
};