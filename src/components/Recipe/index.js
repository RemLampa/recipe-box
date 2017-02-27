import React, { PropTypes } from 'react';

const Recipe = ({recipeName, id, onClick}) => (
  <button
    className='list-group-item'
    onClick={ () => onClick(id,'read') }
    >
    {recipeName}
  </button>
);

Recipe.propTypes = {
  recipeName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Recipe;
