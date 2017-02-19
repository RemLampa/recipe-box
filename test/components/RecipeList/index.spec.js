import RecipeList from 'components/RecipeList';

import RecipeModal from 'components/RecipeModal';

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
      ],
      recipeModal: {
        isHidden: true,
        selectedRecipe: null,
        mode: 'create'
      }
    };

    wrapper = shallow(<RecipeList />);
    instance = wrapper.instance();
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  it('should have proper initial state', () => {
    expect(wrapper).to.have.state('recipes').deep.equal(initialState.recipes);
    expect(wrapper).to.have.state('recipeModal').deep.equal(initialState.recipeModal);
  });

  it('should have method addRecipe() that adds new recipe to recipes state', () => {
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

  it('should have method showModal() that sets recipeModal state (incl. CRUD)', () => {
    const newState = {
      recipes: [
        ...initialState.recipes,
        {
          name: 'Test recipe',
          description: 'This is a test recipe',
          ingredients: [
            'pizza',
            'spaghetti',
            'drinks'
          ]
        },
        {
          name: 'Test recipe2',
          description: 'This is a test recipe2',
          ingredients: [
            'pizzas',
            'spaghettis',
            'drinks'
          ]
        }
      ]
    };

    wrapper.setState({ recipes: newState.recipes });

    instance.showModal(null, 'create');

    expect(wrapper).to.have.state('recipeModal').deep.equal({
      isHidden: false,
      selectedRecipe: null,
      mode: 'create'
    });

    [0, 1, 2].map(id => {
      wrapper.setState({ recipeModal: initialState.recipeModal });

      instance.showModal(id, 'read');

      expect(wrapper).to.have.state('recipeModal').deep.equal({
        isHidden: false,
        selectedRecipe: newState.recipes[id],
        mode: 'read'
      });
    });

    [0, 1, 2].map(id => {
      wrapper.setState({ recipeModal: initialState.recipeModal });

      instance.showModal(id, 'update');

      expect(wrapper).to.have.state('recipeModal').deep.equal({
        isHidden: false,
        selectedRecipe: newState.recipes[id],
        mode: 'update'
      });
    });

    [0, 1, 2].map(id => {
      wrapper.setState({ recipeModal: initialState.recipeModal });

      instance.showModal(id, 'delete');

      expect(wrapper).to.have.state('recipeModal').deep.equal({
        isHidden: false,
        selectedRecipe: newState.recipes[id],
        mode: 'delete'
      });
    });
  });

  it('should contain a ul', () => {
    expect(wrapper).to.have.exactly(1).descendants('ul');
  });

  it('should contain a <RecipeModal /> with correct props', () => {
    expect(wrapper).to.have.exactly(1).descendants(RecipeModal);

    const modalSubject = wrapper.find(RecipeModal).first();

    expect(modalSubject).to.have.prop('isHidden', initialState.recipeModal.isHidden);
    expect(modalSubject).to.have.prop('recipe', initialState.recipeModal.selectedRecipe);
    expect(modalSubject).to.have.prop('mode', initialState.recipeModal.mode);
  });

  it('should contain a button', () => {
    expect(wrapper).to.have.exactly(1).descendants('button');
  });

  context('Add New Recipe Button', () => {
    let buttonWrapper;

    beforeEach(() => {
      buttonWrapper = wrapper.find('button');
    });

    it('should have text "Create Recipe"', () => {
      expect(buttonWrapper).to.have.text('Create Recipe');
    });
  });
});
