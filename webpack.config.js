const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/components/nav/index.js',
   },
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ['html-loader', 'template-ejs-loader'],
      },
    ],
  },
   plugins: [
     new HtmlWebpackPlugin({
      	filename: 'index.html',
        template: './src/index.ejs',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
    publicPath: '/',
   },
 };

