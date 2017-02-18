import React, { Component } from 'react';

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
        selectedRecipe: null
      }
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  addRecipe(recipe) {
    const recipes = [ ...this.state.recipes, recipe ];
    this.setState({ recipes });
  }

  showModal(recipeId) {
    const recipeModal = {
      isHidden: false,
      selectedRecipe: recipeId || recipeId === 0 ?
        this.state.recipes[recipeId] :
        null
    };

    this.setState({ recipeModal });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Test</li>
        </ul>
        <button>Create Recipe</button>
      </div>
    );
  }
};
