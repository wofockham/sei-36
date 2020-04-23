import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';

export default (props) => {
  const _gotoRandomUser = () => {
    const students = 'doubleInc azihakkak cvdsoto frankda joshpanebianco kuljitkaur27 OOC9490 leolasz mitchbrowne vivianpswan gimikon ispzz'.split(' ');
    const username = _(students).sample();

    props.history.push(`/details/${ username }`);
  };

  return (
    <div className="home">
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
      <button onClick={ _gotoRandomUser }>Random user</button>
    </div>
  );
};
