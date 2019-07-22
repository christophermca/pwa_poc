/*single access point
 * include client scripts
 * include all required apps
 * */

import PatchConnect from '../patchConnect/';

class App {
  static connectDevice(device) {
    switch(device) {
      case 'patch':
        PatchConnect.connect();
        break;
      default:
        console.log('device not supported');
    }
  };

  static renderShell() {
    return new Promise(resolve => {
    console.log('Loading App Shell');
    const htmlMessage = 'loading...';

    // could instantiate a client side app eg 'React app'
    document.getElementById('root').innerHTML = htmlMessage;
    return resolve('htmlMessage');
    });
  };

  // renderState
  static render(state) {
    let htmlMessage = '';
    switch(state) {
      case 'patchConnect':
        htmlMessage = PatchConnect.render();
        console.log('rendering');
        break;
      case 'complete':
        htmlMessage = 'Complete!';
        break;
      default:
        console.log('Loading App Shell');
        htmlMessage = 'loading...';
    }
    // could instantiate a client side app at this point
    Promise.resolve(document.getElementById('root').innerHTML = htmlMessage);
  }
};

export default App;

