import RecipeList from 'components/RecipeList';

import RecipeModal from 'components/RecipeModal';

describe('<RecipeList />', () => {
  let wrapper, instance, initialState, newState;

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

    newState = {
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

  it('should have method createRecipe() that adds new recipe to recipes state', () => {
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
    instance.createRecipe(recipe);

    expect(wrapper).to.have.state('recipes').deep.equal(initialState.recipes);
  });

  it('should have a method updateRecipe() that updates recipes state', () => {
    const newRecipe = {
      name: 'Updated recipe',
      description: 'This is an updated recipe',
      ingredients: [
        'updated pizza',
        'updated spaghetti',
        'updated drinks'
      ]
    };

    instance.setState({ recipes: [...newState.recipes] });

    newState.recipes[1] = newRecipe;

    instance.updateRecipe(1, newRecipe);

    expect(wrapper).to.have.state('recipes').deep.equal(newState.recipes);
  });

  it('should have a method deleteRecipe() that updates recipes state', () => {
    instance.setState({ recipes: [...newState.recipes] });

    newState.recipes.splice(1,1);

    instance.deleteRecipe(1);

    expect(wrapper).to.have.state('recipes').deep.equal(newState.recipes);
  });

  it('should have method showModal() that sets recipeModal state (incl. CRUD)', () => {
    wrapper.setState({ recipes: [...newState.recipes] });

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
    expect(modalSubject).to.have.prop('onCreate', instance.createRecipe);
    expect(modalSubject).to.have.prop('onUpdate', instance.updateRecipe);
    expect(modalSubject).to.have.prop('onDelete', instance.deleteRecipe);
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
