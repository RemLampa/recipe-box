import React, { PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

import style from './style.scss';

const DeleteModeModal = props => (
  <div id='delete-mode-modal'>
    <Modal.Header>
      <Modal.Title>Delete Recipe</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className='bg-danger'>
        Are you sure you want to delete this recipe?
      </p>
      <div className='panel panel-warning'>
        <div className='panel-heading'>
          <h3>{props.recipe.name}</h3>
        </div>
        <div id='description' className='panel-body'>
          {props.recipe.description}
        </div>
        <ul className='list-group'>
          {
            props.recipe.ingredients.split(',').map((ingredient, key) => (
              <li
                className='list-group-item'
                key={key}
                >
                {ingredient}
              </li>
            ))
          }
        </ul>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <button
        type='button'
        className='btn btn-md btn-danger'
        onClick={() => props.onDelete(props.recipeId)}
        >
        Delete
      </button>
      <button
        type='button'
        className='btn btn-md btn-default'
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
