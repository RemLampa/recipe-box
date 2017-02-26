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
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.onChangeHandler}
              />
            <input
              type='text'
              name='description'
              value={this.state.description}
              onChange={this.onChangeHandler}
              />
            <textarea
              name='ingredients'
              value={this.state.ingredients}
              onChange={this.onChangeHandler}
              />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-lg btn-success'
            onClick={this.onSubmitHandler}
            >
            Save
          </button>
          <button
            className='btn btn-lg btn-warning'
            onClick={this.onCancelHandler}
            >
            Cancel
          </button>
        </Modal.Footer>
      </div>
    );
  }
};
