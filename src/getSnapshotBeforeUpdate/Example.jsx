import React, { Component } from "react";

const TABS = [
  { id: 0, text: "foo", content: "I am first tab content" },
  { id: 1, text: "bar", content: "I am second tab content" },
  { id: 2, text: "baz", content: "I am third tab content" }
];

export default class Example extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.updateTabIndex = this.updateTabIndex.bind(this);
    this.listRef = React.createRef();
  }

  updateTabIndex(tabIndex) {
    this.setState({ tabIndex });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.tabIndex !== this.state.tabIndex) {
      const list = this.listRef.current;
      const { tabIndex } = this.state;
      return list.children[tabIndex];
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      snapshot.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    const { tabIndex } = this.state;

    return (
      <section style={{ marginBottom: "50px" }}>
        <h2>
          <code>getSnapshotBeforeUpdate</code> example
        </h2>
        <p>
          When you click an anchor, that anchor will smoothly scroll into view
          if it isn't fully there already.
        </p>
        <React.Fragment>
          <ul ref={this.listRef}>
            {TABS.map((tab, idx) => {
              const isActive = idx === tabIndex;
              return (
                <li key={tab.id}>
                  <a
                    href="#"
                    style={{ color: isActive ? "red" : "black" }}
                    onClick={ev => {
                      ev.preventDefault();
                      this.updateTabIndex(idx);
                    }}
                  >
                    {tab.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <p>{TABS[tabIndex].content}</p>
        </React.Fragment>
      </section>
    );
  }
}
