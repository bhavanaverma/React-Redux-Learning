import React from 'react';
import PropTypes from 'prop-types';

//Pure component - doesn't need any state
const Header = props => {
return (
  <header>
    <h1>{props.title}</h1>
  </header>
)};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
