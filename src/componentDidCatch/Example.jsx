import React, { Component } from 'react';

import Child from './Child';
import Boundary from './Boundary';

export default class Example extends Component {
  render() {
    return (
      <section>
        <h2>
          <code>componentDidCatch</code> example
        </h2>
        <p>In production, the below code will display an error message.</p>
        <Boundary>
          <Child />
        </Boundary>
      </section>
    );
  }
}
