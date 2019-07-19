class Bluetooth {
  constructor() {
    this.devices = [];
  }

  add(device) {
    return new promise((resolve, reject) => {
      this.devices.push(device)
      resolve(this.devices)
    })
  }

}
