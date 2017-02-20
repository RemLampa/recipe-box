import React, { PropTypes } from 'react';

const Recipe = ({recipeName}) => (
  <li>{recipeName}</li>
);

Recipe.propTypes = {
  recipeName: PropTypes.object.isRequired
}

export default Recipe;
