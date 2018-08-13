import React, { Component } from 'react';

import Child from './Child';

export default class Example extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  onClick() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <section style={{ marginBottom: '50px' }}>
        <h2>
          <code>getDerivedStateFromProps</code> example
        </h2>
        <p>
          The text is state of a child component that adapts to counter value of parent component sent as props.
        </p>
        <button onClick={this.onClick.bind(this)}>
          Click to increment counter
        </button>
        <Child counter={this.state.counter} />
      </section>
    );
  }
}
