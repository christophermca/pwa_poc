const path  = require('path');
const express = require('express');
const publicPath = path.resolve(__dirname, '../dist/');
const ReactDOM = require('react-dom');
const react = require('react');


const app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get('/login', (req, res) => {
  const dom = ReactDOM.render('<h1>hi mom</h1>', document.getElementById('app'));
  res.send(dom)
});

app.listen(8080, () => console.log('ready'));
