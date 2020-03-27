import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };

    // Mystical mumbojumbo that will be explained later:
    // Bind the event handler to the object permanently.
    this._incrementClicks = this._incrementClicks.bind( this );
  }

  // _methodName indicates that methodName is an event handler.
  _incrementClicks() {
    // this.state.clicks++; // Mutation: doesn't work.
    this.setState({clicks: this.state.clicks + 1}); // No mutation.
  }

  render() {
    return (
      <button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
    );
  }
}

export default Clickr;
