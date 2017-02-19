import React, { PropTypes } from 'react';

const Recipe = ({recipe}) => (
  <li>{recipe.name}</li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default Recipe;
