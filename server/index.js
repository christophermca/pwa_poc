const path  = requre('path');
const express = require('express');

const app = express();
const publicPath = path.resolve(__dirname, '../dist');

app.set('views', publicPath);
app.get('./', (req, res) => {
  res.render('index');
});
app.listen(config.port, () => console.log('ready'));
