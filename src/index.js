import app from './app/index.js';

app.render();

fetch('/connect', (req, res) => {
  return res.status(200)
}).then(() => app.render('patchConnect'));
