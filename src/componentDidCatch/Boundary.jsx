import React, { Component } from 'react';

export default class Boundary extends Component {
  constructor() {
    super();
    this.state = { error: false };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { error, message } = this.state;

    if (error) {
      return <p>There was an error: {message}</p>;
    }
    return this.props.children;
  }
}
