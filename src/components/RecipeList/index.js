import React, { Component } from 'react';

import RecipeModal from 'components/RecipeModal';
import Recipe from 'components/Recipe';

import Style from './style.scss';

export default class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          name: 'Sample Recipe',
          description: 'This is a sample recipe',
          ingredients: 'tomato,salt,water'
        }
      ],
      recipeModal: {
        isHidden: true,
        selectedRecipe: null,
        selectedId: null,
        mode: ''
      }
    };

    this.createRecipe = this.createRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  createRecipe(recipe) {
    const recipes = [ ...this.state.recipes, recipe ];

    this.setState({ recipes });

    this.hideModal();
  }

  updateRecipe(recipeId, recipe) {
    const recipes = [ ...this.state.recipes ];

    recipes[recipeId] = recipe;

    this.setState({ recipes });

    this.hideModal();
  }

  deleteRecipe(recipeId) {
    const recipes = [ ...this.state.recipes ];

    recipes.splice(recipeId, 1);

    this.setState({ recipes });

    this.hideModal();
  }

  showModal(recipeId, mode) {
    const recipeModal = {
      isHidden: false,
      selectedRecipe: recipeId || recipeId === 0 ?
        this.state.recipes[recipeId] :
        null,
      selectedId: recipeId,
      mode: mode
    };

    this.setState({ recipeModal });
  }

  hideModal() {
    const recipeModal = {
      isHidden: true,
      selectedRecipe: null,
      selectedId: null,
      mode: ''
    };

    this.setState({ recipeModal });
  }

  render() {
    const { recipes, recipeModal } = this.state;

    return (
      <div id='recipe-list'>
        <RecipeModal
          isHidden={recipeModal.isHidden}
          recipe={recipeModal.selectedRecipe}
          recipeId={recipeModal.selectedId}
          mode={recipeModal.mode}
          onCreate={this.createRecipe}
          onUpdate={this.updateRecipe}
          onDelete={this.deleteRecipe}
          onHide={this.hideModal}
          switchModal={this.showModal}
        />
        <ul>
          {
            this.state.recipes.map((recipe,index) => <Recipe
              recipeName={recipe.name}
              key={index}
              id={index}
              onClick={this.showModal}
            />)
          }
        </ul>
        <button
          type='button'
          className='btn btn-primary btn-lg btn-block'
          onClick={() => this.showModal(null,'create')}
        >
          Create Recipe
        </button>
      </div>
    );
  }
};
