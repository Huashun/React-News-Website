const path = require('path');
const webpack = require('webpack');

const config = {
    context: path.join(__dirname),
    //devtool: debug ? "inline-sourcemap" : null,
    entry: './src/js/root.js',
    output: {
        path: __dirname,
        publicPath: '',
        filename: './src/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js?$)/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015'],
                plugins: [
                  ["react-html-attrs"],
                  ["import", { libraryName: "antd", style: "css" }]]
            }
        },{
          test: /\.css$/, loader: 'style-loader!css-loader'
        }
      ]
    }
};

module.exports = config;
