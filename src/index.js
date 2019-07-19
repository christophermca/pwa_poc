import app from './app/index.js';

window.fetch('/connect?type=patch')
  .then((res) => {
    // simulate time to grab data
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res.json());
      }, 2000);
    });
  })
  .then(({context = 'complete'} = json) => {
    console.log(`rendering ${context}`);
    return app.render(context);
  });

window.addEventListener('load', () => {
  app.render();
  navigator.serviceWorker.register('./sw.js');
});

