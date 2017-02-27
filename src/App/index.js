import React from 'react';

import RecipeList from 'components/RecipeList';
import NavBar from 'components/NavBar';

import './app.scss';

const App = () => (
  <div>
    <RecipeList />
    <NavBar />
  </div>
);

export default App;
