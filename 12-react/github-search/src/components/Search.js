import React, { useState } from 'react';

export default (props) => {
  const [username, setUsername] = useState(''); // array destructuring

  const _handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/details/${ username }`); // react router navigation
  }

  return (
    <div className="search">
      <h2>Search Github by username</h2>
      <form onSubmit={ _handleSubmit }>
        <label>
          Search:
          <input type="search" value={ username } onChange={ (e) => setUsername(e.target.value) } />
        </label>
        <button>Search for { username }</button>
      </form>
    </div>
  );
};

// import React, { Component } from 'react';
// export default class Search extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: ''
//     };
//     this._handleSubmit = this._handleSubmit.bind(this);
//   }
//
//   _handleSubmit(e) {
//     e.preventDefault();
//     this.props.history.push(`/details/${ this.state.username }`);
//   }
//
//   render() {
//     return (
//       <div className="search">
//         <h2>Search Github by username</h2>
//         <form onSubmit={ this._handleSubmit }>
//           <label>
//             Search:
//             <input
//               type="search"
//               value={ this.state.username }
//               onChange={ (e) => this.setState({username: e.target.value}) } />
//           </label>
//           <button>Search for { this.state.username }</button>
//         </form>
//       </div>
//     )
//   }
// }
