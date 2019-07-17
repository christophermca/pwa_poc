import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div id="login-module">
        <h1>Login</h1>
        <form name="login">
          <input placeholder="username"/>
          <input placeholder="password"/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

