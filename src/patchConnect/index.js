const id = 'patch-connect';

const template = (connected) => {
  const message = connected ? "Connected" : "Not Connected";
  const className = connected ? "connected" : '';

  return `
    <div id=${id}>
      <div id="patch-status" class=${className}>
        ${message}
      </div>
      <button id="connect-device"
              name="connect"
              onClick="window.dispatchEvent(new Event('connect'))"
              > ${ (!connected) ? 'Connect': 'Disconnect'} </button>
     </div>`;
};


const updateStatus = () => {
  const patchStatus = document.getElementById('patch-status');
  const connectButton = document.getElementById('connect-device');
  patchStatus.classList.add('connected');
};

class PatchConnect {
  static render(connected) {
    return template(false);
  }

  static connect() {
    if(navigator.bluetooth) {
      navigator.bluetooth.requestDevice({acceptAllDevices: true})
        .then(device => {
          console.log('device connected');
          document.getElementById(`${id}`).innerHTML = template(true);
        })
        .catch(err => console.log(err));
    } else {
      alert('could not connect to device');
    }
  }
};

export default PatchConnect;
