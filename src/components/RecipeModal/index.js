import React, { PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

import CreateModeModal from './CreateModeModal';
import ReadModeModal from './ReadModeModal';
import UpdateModeModal from './UpdateModeModal';
import DeleteModeModal from './DeleteModeModal';

const RecipeModal = props => (
  <Modal
    show={!props.isHidden}
    bsSize='lg'
    backdrop='static'
    onHide={props.onHide}
  >
    { props.mode === 'create' && <CreateModeModal
      onCreate={props.onCreate}
      onCancel={props.onHide}
      /> }
    { props.mode === 'read' && <ReadModeModal /> }
    { props.mode === 'update' && <UpdateModeModal /> }
    { props.mode === 'delete' && <DeleteModeModal /> }
    { ['create', 'read', 'update', 'delete'].indexOf(props.mode) < 0 &&
      <Modal.Body>
        <noscript />
      </Modal.Body>
    }
  </Modal>
);

RecipeModal.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  recipeId: PropTypes.number,
  recipe: PropTypes.object,
  mode: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired
}

export default RecipeModal;
