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
            className='btn btn-lg btn-success'
            onClick={this.onSubmitHandler}
            >
            Add Recipe
          </button>
          <button
            type='button'
            className='btn btn-lg btn-warning'
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
