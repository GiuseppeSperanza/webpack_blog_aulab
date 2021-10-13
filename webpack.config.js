const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
      new HtmlWebpackPlugin(),
      new CleanWebpackPlugin(),
  ],
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Estensioni dei file che Webpack legge in fase di compilazione
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,  // Loader Typescript
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            // crea il tag 'style' nel DOM in cui inittare il codice
            'style-loader',
            // Converte il codice css in modulo commonJs per poterlo importare
            'css-loader',
            // Compila codice Sass in css
            'sass-loader',
        ]
      }
    ]
  }
};


