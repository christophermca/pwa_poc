/*single access point
 * include client scripts
 * include all required apps
 * */

import patchConnect from '../patchConnect/index.js';

export default {
  render(context) {
    let htmlMessage = '';
    switch(context) {
      case 'patch':
        htmlMessage = patchConnect.render();
        console.log('rendering');
        break;
      case 'complete':
        htmlMessage = 'Complete!';
        break;
      default:
        console.log('Loading App Shell');
        htmlMessage = 'loading...';
    }

    document.getElementById('root').innerHTML = htmlMessage;
  }
};

