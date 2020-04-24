import React from 'react';

import { Link } from 'gatsby';

// Custom component (only used here) to make Links easier
const ListLink = (props) => (
  <li style={{display: 'inline-block', marginRight: '1em'}}>
    <Link to={props.to}>
      { props.children }
    </Link>
  </li>
);

export default (props) => (
  <div style={{margin: '3rem auto', maxWidth: 600, padding: '0 1rem'}}>
    <header style={{marginBottom: '1.5rem'}}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{display: 'inline'}}>A Site About My Feelings</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {props.children}
  </div>
);
