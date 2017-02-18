import RecipeList from 'components/RecipeList';

describe('<RecipeList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeList />);
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  it('should have proper initial state', () => {
    const initialState = {
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

    expect(wrapper).to.have.state('recipes').deep.equal(initialState.recipes);
  });

  it('should contain a ul', () => {
    expect(wrapper).to.have.exactly(1).descendants('ul');
  });
});
