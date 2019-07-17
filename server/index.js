const path  = require('path');
const express = require('express');
const publicPath = path.resolve(__dirname, '../dist/');

const app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.listen(8080, () => console.log('ready'));
