const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    data: './src/Data/index.js',
    select: './src/Select/index.js',
    common: './src/common/index.js',
  },
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
    library: 'react-library',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new CompressionPlugin()],
  devtool: 'source-map',
};
