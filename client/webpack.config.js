'use strict';

var path = require('path');

// var ngAnnotatePlugin = require('ng-annotate-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './jb-client/app/app.js',
  output: {
    path: path.join(__dirname, './bundle'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /(.*)\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader'
    }]
  },
  resolve: {
    modulesDirectories: ['bower_components', 'node_modules']
  },
  plugins: [
    // new ngAnnotatePlugin({
    //   add: true,
    //   // other ng-annotate options here
    // })
  ]
};
