import { resolve } from "path"
import { Configuration, DefinePlugin } from "webpack"
import { CheckerPlugin } from "awesome-typescript-loader"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as CopyWebpackPlugin from "copy-webpack-plugin"

const PKG = require("./package.json")
const PATH = (...p: Array<string>) => resolve(__dirname, ...p)

export default {
  mode: "development",

  target: "web",
  context: PATH("./src"),

  entry: {
    metrika: PATH("./src/scripts/metrika.js"),
    crowdsale: PATH("./src/scripts/crowdsale.ts"),
    timer: PATH("./src/scripts/timer.ts"),
    promo: PATH("./src/scripts/promo.ts"),
    buy: PATH("./src/scripts/buy.ts"),
    platform: PATH("./src/scripts/platform.ts"),
  },

  resolve: {
    extensions: [".ts", ".js", ".json"],
    mainFields: ["module", "main"],
    symlinks: true,
  },

  output: {
    path: PATH("./dist"),
    filename: "js/[name].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "awesome-typescript-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "link:href", "source:srcset"],
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash].[ext]",
              outputPath: "css",
              publicPath: "/css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("postcss-import")(),
                require("postcss-nested")(),
                require("postcss-custom-media")(),
                require("autoprefixer")(),
                require("postcss-csso")(),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "svg",
              publicPath: "/svg",
            },
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [
                { cleanupIDs: false },
                { convertPathData: false },
                { removeUselessDefs: false },
                { removeXMLProcInst: false },
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
              publicPath: "/img",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CheckerPlugin(),
    new DefinePlugin({
      APP_NAME: JSON.stringify(PKG.name),
      APP_VERSION: JSON.stringify(PKG.version),
      METRIKA_ID: JSON.stringify(49101970),
      END_DATE: JSON.stringify("2019-01-01"),
      CROWDSALE_ADDRESS: JSON.stringify("0x09541e5e03e3f10730fee50131168a99c5ce15c1"),
    }),
    new HtmlWebpackPlugin({
      template: PATH("./src/index.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      hash: true,
    }),
    new CopyWebpackPlugin([
      {
        from: PATH("./src/pdf"),
      },
      {
        from: PATH("./src/manifest.json"),
      },
      {
        from: PATH("./src/img/og.jpg"),
      },
      {
        from: PATH("./src/robots.txt"),
      },
    ]),
  ],

  devServer: {
    compress: true,
    contentBase: PATH("./build"),
    port: 8080,
  },

  node: undefined,
  devtool: false,
  stats: "minimal",
} as Configuration
