import React, { PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

const ReadModeModal = props => (
  <div>
    <Modal.Header>
      <Modal.Title>{props.recipe.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div id='description'>
        {props.recipe.description}
      </div>
      <ul>
        {
          props.recipe.ingredients.split(',').map((ingredient,index) => (
            <li key={index}>{ingredient}</li>)
          )
        }
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <button onClick={() => props.switchModal(props.recipeId,'update')}>
        Edit
      </button>
      <button onClick={() => props.switchModal(props.recipeId,'delete')}>
        Delete
      </button>
      <button onClick={props.onHide}>Close</button>
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
