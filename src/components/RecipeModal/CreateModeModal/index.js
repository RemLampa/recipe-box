import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class CreateModeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      ingredients: ''
    };
    this.renderForm = this.renderForm.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler() {
    const recipe = this.state;

    if (recipe.name === '' || recipe.description === '' || recipe.ingredients === '') {
      return;
    }

    this.props.onCreate(recipe);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    event.preventDefault();

    this.setState({ [name]: value });
  }

  renderForm() {
    return (
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
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
          <label htmlFor='description'>Description</label>
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
          <label htmlFor='ingredients'>Ingredients (separate by comma)</label>
          <textarea
            name='ingredients'
            id='ingredients'
            className='form-control'
            value={this.state.ingredients}
            onChange={this.onChangeHandler}
            />
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        <Modal.Header>
          <Modal.Title>Create New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { this.renderForm() }
        </Modal.Body>
        <Modal.Footer>
          <button
            type='button'
            className='btn btn-md btn-primary'
            onClick={this.onSubmitHandler}
            >
            Add Recipe
          </button>
          <button
            type='button'
            className='btn btn-md btn-warning'
            onClick={this.props.onCancel}
            >
            Cancel
          </button>
        </Modal.Footer>
      </div>
    );
  }
}

CreateModeModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default CreateModeModal;
