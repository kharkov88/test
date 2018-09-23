const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "public"), // string
    filename: 'bundle.js',
    library: 'myApp'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-3']
          }
        }
      }
    ]
  }
}
