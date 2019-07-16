const path  = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.resolve(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(8080, () => console.log('ready'));
