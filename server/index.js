const path  = require('path');
const express = require('express');
const publicPath = path.resolve(__dirname, '../dist/');
const manifest = push.resolve(__dirname, 'src/manifest.json');


const app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get('/manifest.json', (req, res) => {
  res.type('json').send(manifest);
});


app.listen(8080, () => console.log('ready'));
