import React, { Component, PropTypes } from 'react';

import { Modal } from 'react-bootstrap';

export default class UpdateModeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.recipe.name,
      description: props.recipe.description,
      ingredients: props.recipe.ingredients,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onCancelHandler = this.onCancelHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    event.preventDefault();

    this.setState( { [name]: value });
  }

  onSubmitHandler() {
    this.props.onSave(this.props.recipeId, this.state);
  }

  onCancelHandler() {
    this.props.switchModal(this.props.recipeId, 'read');
  }

  render() {
    return (
      <div>
        <Modal.Header>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChangeHandler}
                />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>
                Description
              </label>
              <input
                type='text'
                name='description'
                id='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChangeHandler}
                />
            </div>
            <div className='form-group'>
              <label htmlFor='ingredients'>
                Ingredients (separate by comma)
              </label>
              <textarea
                name='ingredients'
                id='ingredients'
                className='form-control'
                value={this.state.ingredients}
                onChange={this.onChangeHandler}
                />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-md btn-primary'
            onClick={this.onSubmitHandler}
            >
            Save
          </button>
          <button
            className='btn btn-md btn-warning'
            onClick={this.onCancelHandler}
            >
            Cancel
          </button>
        </Modal.Footer>
      </div>
    );
  }
};

UpdateModeModal.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
  }),
  onSave: PropTypes.func.isRequired,
  switchModal: PropTypes.func.isRequired
};
