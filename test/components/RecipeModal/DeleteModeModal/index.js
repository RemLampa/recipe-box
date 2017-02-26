import DeleteModeModal from 'components/RecipeModal/DeleteModeModal';

import { Modal } from 'react-bootstrap';

describe('<DeleteModeModal />', () => {
  let wrapper, instance, props;

  beforeEach(() => {
    props = {
      recipeId: 2,
      recipe: {
        name: 'test recipe',
        description: 'this is a test recipe',
        ingredients: 'apple,pine,ballpen'
      },
      onDelete: spy(),
      onCancel: spy()
    };

    wrapper = shallow(<DeleteModeModal {...props} />);
    instance = wrapper.instance();
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  describe('<Modal.Header />', () => {
    it('should contain proper Modal Header', () => {
      const mountedWrapper = mount(<DeleteModeModal {...props} />);

      expect(wrapper).to.have.exactly(1).descendants(Modal.Header);

      expect(wrapper.find(Modal.Header)).to.have.exactly(1).descendants(Modal.Title);
      expect(mountedWrapper.find(Modal.Title)).to.have.text('Delete Recipe');
    });
  });

  describe('<Modal.Body />', () => {
    it('should contain a Modal Body', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Body);
    });

    it('should contain a warning box', () => {
      const text = 'Are you sure you want to delete this recipe?'

      expect(wrapper).to.have.exactly(1).descendants('p.bg-danger');

      expect(wrapper.find('p.bg-danger')).to.have.text(text);
    });

    it('should have an h2 with the recipe\'s name as text', () => {
      expect(wrapper).to.have.exactly(1).descendants('h3');

      expect(wrapper.find('h3')).to.have.text(props.recipe.name);
    });

    it('should contain a recipe description box', () => {
      expect(wrapper).to.have.exactly(1).descendants('div#description');
      expect(wrapper.find('#description')).to.have.text(props.recipe.description);
    });

    it('should contain a list of recipe ingredients', () => {
      const ingredientsArray = props.recipe.ingredients.split(',');

      expect(wrapper.find(Modal.Body)).to.have.exactly(1).descendants('ul');
      expect(wrapper.find('ul')).to.have.exactly(ingredientsArray.length).descendants('li');

      ingredientsArray.map((ingredient,index) => {
        expect(wrapper.find('li').at(index)).to.have.text(ingredient);
      })
    });
  });

  describe('<Modal.Footer />', () => {
    it('should contain a Modal.Footer', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Footer);
    });

    it('should have buttons for deleting and cancelling', () => {
      expect(wrapper).to.have.exactly(2).descendants('button');

      expect(wrapper.find('button').at(0)).to.have.text('Delete');

      wrapper.find('button').at(0).simulate('click');
      expect(props.onDelete).to.have.been.calledOnce;
      expect(props.onDelete).to.have.been.calledWith(props.recipeId);

      expect(wrapper.find('button').at(1)).to.have.text('Cancel');

      wrapper.find('button').at(1).simulate('click');
      expect(props.onCancel).to.have.been.calledOnce;
      expect(props.onCancel).to.have.been.calledWith(props.recipeId, 'read');
    });
  });
});
