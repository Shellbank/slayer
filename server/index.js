const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'app')));

app.get('/', function (req, res) {
  res.send('index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
