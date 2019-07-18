import app from './app/index.js';

window.fetch('/connect?type=patch')
  .then((res) => res.json())
  .then(({context = 'complete'} = json) => {
    app.render(context);
  });

window.addEventListener('load', () => {
  navigator.serviceWorker.register('./sw.js');
});

