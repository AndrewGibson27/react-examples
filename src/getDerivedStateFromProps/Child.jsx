import React, { Component } from 'react';

export default class Child extends Component {
  constructor() {
    super();
    this.state = { label: '' };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.counter % 2 === 0) {
      return { label: 'Label is even!' };
    }
    return { label: 'Label is odd!' };
  }

  render() {
    return <p>{this.state.label}</p>;
  }
}
