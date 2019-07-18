const path  = require('path');
const express = require('express');
const publicPath = path.resolve(__dirname, '../dist');
const appShell = path.resolve(`${publicPath}/app`);
const fetch = require('node-fetch');


const app = express();
app.use(express.static(publicPath));

/*use routes to control app state */

// fetch appshell
app.use('/*', (req, res, next) => {
  res.sendFile(`${appShell}/index.html`);
  return next();
});

app.get('/', (req, res) => {
  res.status(200);
});

app.get('/connect', (req, res) => {
  const {type} = req.query;
  const acceptedTypes = ['patch'];
  if (acceptedTypes.includes(type)) {
    return res.json({"context": "patch"});
  } else {
    console.log(`"${type}" is an invalid type`);
    return res.status(400).json({"context": "complete"});
  }


});

app.get('/manifest.json', (req, res) => {
  res.status(200).sendFile(manifest);
});


app.listen(8080, () => console.log('ready'));
