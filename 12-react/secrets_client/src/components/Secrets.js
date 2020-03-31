import React, { Component } from 'react'; // destructuring
import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/secrets.json';
const SERVER_URL = 'http://73a07860.ngrok.io/secrets.json';

class Secrets extends Component {
  constructor() {
    super();

    this.state = {
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind(this);

    // Let's poll for secrets from the DB via ajax
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({secrets: results.data});
        setTimeout(fetchSecrets, 4000); // recursion
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, {content: content}).then((results) => {
      // TODO: rewrite this with the spread operator.
      const allSecrets = this.state.secrets;
      allSecrets.push(results.data);
      this.setState({secrets: allSecrets});
    });
  }

  render() {
    return (
      <div>
        <h1>Tell me all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret }/>
        <Gallery secrets={ this.state.secrets } />
      </div>
    );
  }
};

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault(); // Stay here and handle the submission with JS.
    this.props.onSubmit( this.state.content );
    this.setState({content: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
          <textarea value={ this.state.content } onChange={ this._handleChange }></textarea>
          <input type="submit" value="Tell" />
        </form>
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
