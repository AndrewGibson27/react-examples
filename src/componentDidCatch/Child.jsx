import React, { Component } from 'react';

export default class Child extends Component {
  componentDidMount() {
    throw new Error('Testing componentDidCatch');
  }

  render() {
    return null;
  }
}
