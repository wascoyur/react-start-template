import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

const port = 2233;
const dist = join(__dirname, 'dist');
const src = join(__dirname, 'src');
const host = 'localhost';

export default (_, args) => {
  return {
    entry: './index.tsx',
    devtool: 'source-map',
    context: src,
    devServer: {
      open: true,
      port,
      hot: true,
      historyApiFallback: true,
      host,
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
        args.mode === 'development' ? `http://${host}:${port}/` : undefined /* <- прописать данные своего github */,
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: _loader,
            },
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: _loader,
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
          configFile: join(__dirname, 'tsconfig.json'),
        },
      }),
    ],
  };
};
