const path  = require('path');
const express = require('express');
const publicPath = path.resolve(__dirname, '../dist/');
const manifest = path.resolve(__dirname, '../src/manifest.json');


const app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get('/manifest.json', (req, res) => {
  res.status(200).sendFile(manifest);
});


app.listen(8080, () => console.log('ready'));
