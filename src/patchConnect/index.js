import Bluetooth from '../Bluetooth';
const template = (message = "NOT Connected?") => {

return `
<div id="connect">${message}</div>
`
}

const patchConnect = {
  connect() {
    Bluetooth.add()
  }

  render() {
    this.connect();
    return template();
  }
};

export default patchConnect;
