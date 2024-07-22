// webpack.config.js
import path from "path";
const __dirname = path.resolve();

export default {
  mode: "development",
  entry: path.resolve(__dirname, "./src/main"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public")
  },
  devServer: {
    static: path.resolve(__dirname, "./public"),
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"]
      }
    ]
  }
};
