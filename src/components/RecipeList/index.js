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
      ]
    };
  }

  addRecipe(recipe) {
    const recipes = [ ...this.state.recipes, recipe ];
    this.setState({ recipes });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Test</li>
        </ul>
      </div>
    );
  }
};
