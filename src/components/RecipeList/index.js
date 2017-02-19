import React, { Component } from 'react';

import RecipeModal from 'components/RecipeModal';

import Style from './style.scss';

export default class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          name: 'Sample Recipe',
          description: 'This is a sample recipe',
          ingredients: [
            'tomato',
            'salt',
            'water'
          ]
        }
      ],
      recipeModal: {
        isHidden: true,
        selectedRecipe: null,
        mode: 'create'
      }
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  addRecipe(recipe) {
    const recipes = [ ...this.state.recipes, recipe ];
    this.setState({ recipes });
  }

  updateRecipe(recipeId, recipe) {
    const recipes = [ ...this.state.recipes ];

    recipes[recipeId] = recipe;

    this.setState({ recipes });
  }

  showModal(recipeId, mode) {
    const recipeModal = {
      isHidden: false,
      selectedRecipe: recipeId || recipeId === 0 ?
        this.state.recipes[recipeId] :
        null,
      mode: mode
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
          mode={recipeModal.mode}
        />
        <ul>
          <li>Test</li>
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
