import React, { Component } from 'react';

import Nav from './Nav';

export const AuthContext = React.createContext(false);

export default class Example extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }

  componentDidMount() {
    this.getAuthStatus();
  }

  getAuthStatus() {
    const num = Math.floor(Math.random() * 100);
    const isLoggedIn = num % 2 === 0;

    this.setState({ isLoggedIn });
  }

  render() {
    return (
      <section style={{ marginBottom: '50px' }}>
        <h2>Context Example</h2>
        <p>Shows different value depending on context-handled log-in status</p>

        <AuthContext.Provider
          value={this.state.isLoggedIn}
        >
          <Nav />
        </AuthContext.Provider>
      </section>
    );
  }
}
