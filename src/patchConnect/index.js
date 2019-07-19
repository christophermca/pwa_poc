import Bluetooth from '../Bluetooth';
const template = (message = "NOT Connected?") => ` <div id="connect">${message}</div> `;

const patchConnect = {
  render() {
    return template();
  }
};

export default patchConnect;
