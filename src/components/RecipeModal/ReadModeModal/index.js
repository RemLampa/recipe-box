import React, { PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

const ReadModeModal = props => (
  <div>
    <Modal.Header>
      <Modal.Title>{props.recipe.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div id='description' className='well well-lg'>
        {props.recipe.description}
      </div>
      <div className='panel panel-info'>
        <div className='panel-heading'>
          Ingredients
        </div>
        <ul className='list-group'>
          {
            props.recipe.ingredients.split(',').map((ingredient,index) => (
              <li
                className='list-group-item'
                key={index}
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
        className='btn btn-md btn-primary'
        onClick={() => props.switchModal(props.recipeId,'update')}
        >
        Edit Recipe
      </button>
      <button
        type='button'
        className='btn btn-md btn-danger'
        onClick={() => props.switchModal(props.recipeId,'delete')}
        >
        Delete
      </button>
      <button
        type='button'
        className='btn btn-md btn-default'
        onClick={props.onHide}
        >
        Close
      </button>
    </Modal.Footer>
  </div>
);

ReadModeModal.PropTypes = {
  recipeId: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
  }),
  onHide: PropTypes.func.isRequired,
  switchModal: PropTypes.func.isRequired
}

export default ReadModeModal;
