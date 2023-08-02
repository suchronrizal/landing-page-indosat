const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg|webp)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
          esModule: false,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
    }),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10,
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};