const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  name: "cfq",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }), 
      new MiniCssExtractPlugin({ filename: './styles/main.css'})
    ],
  devServer: {
    compress: true,
    port: 3000,
  },
}