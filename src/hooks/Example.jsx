import React, { Component } from 'react';

import Hook from './Hook';

export default class Example extends Component {
  constructor() {
    super();
    this.state = { showHook: true };
  }

  toggleHook() {
    this.setState(prevState => ({ showHook: !prevState.showHook }));
  }

  render() {
    const { showHook } = this.state;

    return (
      <section style={{ marginBottom: '50px' }}>
        <h2>Hooks example</h2>
        <p>
          Example of the useState and useEffect hooks.
          You can also click "toggle hook component" to demonstrate cleaning up
          event listeners when the hook-driven component is unmounted.
        </p>
        <button onClick={this.toggleHook.bind(this)}>Toggle hook component</button>
        {showHook && <Hook />}
      </section>
    );
  }
}
