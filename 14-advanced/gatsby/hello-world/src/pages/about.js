import React from "react";
import Header from '../components/header';

// Regular parentheses (not {curlies!}) for implicit return:
export default () => (
  <div style={{ color: 'teal' }}>
    <Header headerText="About Me" />
    <Header headerText="A Second Header About Me" />
    <p>wowow. No need to route</p>
  </div>
);
