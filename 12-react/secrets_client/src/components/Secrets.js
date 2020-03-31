import React, { Component } from 'react'; // destructuring

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      secrets: [
        {id: 1, content: 'Secret A'},
        {id: 2, content: 'Secret B'},
        {id: 3, content: 'Secret C'}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm />
        <Gallery secrets={ this.state.secrets } />
      </div>
    );
  }
};

class SecretForm extends Component {
  render() {
    return (
      <div>
        SecretForm coming soon
      </div>
    );
  }
}

const Gallery = (props) => {
  return (
    <div>
      { props.secrets.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
    </div>
  )
};

export default Secrets;
