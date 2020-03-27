import React, { Component } from 'react';

class Clickr extends Component {
  click() {
    console.log('you clicked');
  }

  render() {
    return (
      <button onClick={ this.click }>0 clicks so far</button>
    );
  }
}

export default Clickr;
