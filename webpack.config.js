module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  entry: './src/frontend/Index.tsx',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}