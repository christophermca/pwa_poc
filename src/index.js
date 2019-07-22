/* include all client JS */

// App could be a react app
import App from './app/index.js';


window.addEventListener('load', () => {
  App.renderShell().then(() => {
    return window.fetch('/connect?type=patch')
      .then((res) => {
        // simulate time to grab data
        return new Promise(resolve => {
          setTimeout(() => {
            return resolve(res.json());
          }, 2000);
        });
      })
      .then(({context = 'complete'} = json) => {
        console.log(`rendering ${context}`);
        return App.render(context);
      });
  });
  navigator.serviceWorker.register('./sw.js');
});

window.addEventListener('connect', () => {
  App.connectDevice('patch');
});
