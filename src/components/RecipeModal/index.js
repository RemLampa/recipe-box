import React from 'react';

import { Modal } from 'react-bootstrap';

const RecipeModal = ({isHidden, recipe}) => (
  <Modal
    show={!isHidden}
    bsSize='lg'
    backdrop={true}
  >
    <Modal.Body>
      Test
    </Modal.Body>
  </Modal>
);

export default RecipeModal;
