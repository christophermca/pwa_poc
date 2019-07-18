/*single access point
 * include client scripts
 * include all required apps
 * */

import patchConnect from '../patchConnect/index.js';

export default {
  render(context) {
    switch(context) {
      case 'patchConnect':
        document.getElementById('root').innerHTML = patchConnect.render();
        console.log('rendering');
        break;

      default:
        console.log('Loading App Shell');
        document.getElementById('root').innerHTML = 'loading...';
    }
  }
};

