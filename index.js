require('babel-register')({
  extensions: [".es6", ".es", ".jsx", ".js"],
  ignore: /node_modules/
});

const app = require('./server/');
