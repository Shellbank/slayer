const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function (req, res) {
  res.send('index.html')
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});

module.exports = app;
