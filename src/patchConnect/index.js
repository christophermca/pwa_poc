const template = `<form>
    <input placeholder="username" />
    <input placeholder="password" />
    <button type="submit"/>
  </form>`;

const patchConnect = {
  render() {
    return template;
  }
};

export default patchConnect;
