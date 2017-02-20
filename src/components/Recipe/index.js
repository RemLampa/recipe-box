import React, { PropTypes } from 'react';

const Recipe = ({recipeName, id, onClick}) => (
  <li onClick={ () => onClick(id,'read') }>
    {recipeName}
  </li>
);

Recipe.propTypes = {
  recipeName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Recipe;
