import RecipeList from 'components/RecipeList';

describe('<RecipeList />', () => {
  let wrapper, instance, initialState;

  beforeEach(() => {
    initialState = {
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

    wrapper = shallow(<RecipeList />);
    instance = wrapper.instance();
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  it('should have proper initial state', () => {
    expect(wrapper).to.have.state('recipes').deep.equal(initialState.recipes);
  });

  it('should have method addRecipe() that adds new recipe to this.state.recipes', () => {
    const recipe = {
      name: 'Test recipe',
      description: 'This is a test recipe',
      ingredients: [
        'pizza',
        'spaghetti',
        'drinks'
      ]
    };

    initialState.recipes.push(recipe);
    instance.addRecipe(recipe);

    expect(wrapper).to.have.state('recipes').deep.equal(initialState.recipes);
  });

  it('should have a button that calls method addRecipe()', () => {

  });

  it('should contain a ul', () => {
    expect(wrapper).to.have.exactly(1).descendants('ul');
  });
});
