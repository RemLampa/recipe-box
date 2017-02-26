import React, { PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

const DeleteModeModal = props => (
  <div>
    <Modal.Header>
      <Modal.Title>Delete Recipe</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className='bg-danger'>
        Are you sure you want to delete this recipe?
      </p>
      <h3>{props.recipe.name}</h3>
      <div id='description'>
        {props.recipe.description}
      </div>
      <ul>
        {
          props.recipe.ingredients.split(',').map((ingredient, key) => (
            <li key={key}>{ingredient}</li>
          ))
        }
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <button
        type='button'
        className='btn btn-lg btn-danger'
        onClick={() => props.onDelete(props.recipeId)}
        >
        Delete
      </button>
      <button
        type='button'
        className='btn btn-lg btn-warning'
        onClick={() => props.onCancel(props.recipeId, 'read')}
        >
        Cancel
      </button>
    </Modal.Footer>
  </div>
);

DeleteModeModal.propTypes = {
  recipeId: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
  }),
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default DeleteModeModal;
