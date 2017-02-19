import React, { PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

const RecipeModal = (props) => (
  <Modal
    show={!props.isHidden}
    bsSize='lg'
    backdrop='static'
  >
    <Modal.Body>
      Test
    </Modal.Body>
  </Modal>
);

RecipeModal.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  recipe: PropTypes.object,
  mode: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired
}

export default RecipeModal;
