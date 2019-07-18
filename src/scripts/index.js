import '../styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => (
  <div>
    <h1> Hi bom!</h1>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
