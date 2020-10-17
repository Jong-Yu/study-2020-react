const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src'), // src 내부의 index.js 를 바라본다
  output: {
    // 빌드한 결과물을 어디에 생성할 것 인가
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // 어떤 파일들을 어떤 loader 를 이용하여 해석 할 것 인가
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // .js 확장자 생략 가능
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      showErrors: true,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
}
