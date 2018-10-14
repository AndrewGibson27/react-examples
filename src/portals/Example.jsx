import React, { Component } from 'react';

import Modal from './Modal';

export default class Example extends Component {
  constructor() {
    super();
    this.state = { counter: 0, modalIsVisible: false };
  }

  incrementCounter() {
    this.setState(state => ({
      counter: state.counter + 1,
      modalIsVisible: true
    }));
  }

  closeModal() {
    this.setState({ modalIsVisible: false });
  }

  render() {
    const evenPortalChildren = (
      <div>
        <p>Even numbers are fun!</p>
        <p>Don't you agree?</p>
      </div>
    );

    const oddPortalChildren = (
      <div>
        <p>Odd numbers are fun!</p>
        <p>Don't you think?</p>
      </div>
    );

    const { counter, modalIsVisible } = this.state;

    return (
      <section style={{ marginBottom: '50px' }}>
        <h2>
          Portals example
        </h2>
        <p>
          Click to open a hideously styled modal that is not in the DOM hierarchy
        </p>
        <button
          onClick={this.incrementCounter.bind(this)}
        >
          Increment counter
        </button>
        {
          modalIsVisible &&
          <div>
            <button
              onClick={this.closeModal.bind(this)}
            >
              Close modal
            </button>
            <Modal
              closeModal={this.closeModal.bind(this)}
            >
              {counter % 2 === 0 ? evenPortalChildren : oddPortalChildren}
            </Modal>
          </div>
        }
      </section>
    );
  }
}
