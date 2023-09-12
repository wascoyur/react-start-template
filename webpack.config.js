const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = 2233;
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');
const host = 'localhost';

module.exports = (_, args) => {
  return {
    entry: './index.tsx',
    devtool: 'inline-source-map',
    context: src,
    devServer: {
      open: true,
      port,
      hot: true,
      historyApiFallback: true,
      host,
      https: true,
    },
    resolve: {
      modules: [src, 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        src,
      },
    },
    output: {
      path: dist,
      publicPath:
        args.mode === 'development' ? `https://${host}:${port}/` : undefined /* <- прописать данные своего github */,
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`,
    },
    module: {
      rules: [
        {
          test: /\.([cm]?ts|tsx)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
          ],
        },
        {
          test: /\.svg/,
          type: 'asset/inline',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpe?g)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        favicon: './favicon.svg',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: path.join(__dirname, 'tsconfig.json'),
        },
      }),
    ],
  };
};
