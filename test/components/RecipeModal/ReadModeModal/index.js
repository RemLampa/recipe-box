import ReadModeModal from 'components/RecipeModal/ReadModeModal';

import { Modal } from 'react-bootstrap';

describe('<ReadModeModal />', () => {
  let wrapper, mountedWrapper, props;

  beforeEach(() => {
    props = {
      recipeId: 2,
      recipe: {
        name: 'Test Recipe',
        description: 'This is a test recipe',
        ingredients: 'apple,orange,grapes,banana'
      },
      onHide: spy(),
      switchModal: spy()
    };

    wrapper = shallow(<ReadModeModal {...props} />);
    mountedWrapper = mount(<ReadModeModal {...props} />);
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  describe('<Modal.Header />', () => {
    it('should contain proper Modal Header with recipe name', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Header);
      expect(wrapper).to.have.exactly(1).descendants(Modal.Title);
      expect(mountedWrapper.find(Modal.Title)).to.have.text(props.recipe.name);
    })
  });

  describe('<Modal.Body />', () => {
    it('should contain Modal Body', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Body);
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

  describe('<Modal.Fooder />', () => {
    it('should contain Modal Footer', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Footer);
    });

    it('should contain Edit, Delete, and Close buttons', () => {
      expect(wrapper.find(Modal.Footer)).to.have.exactly(3).descendants('button');

      expect(wrapper.find('button').at(0)).to.have.text('Edit');

      expect(wrapper.find('button').at(1)).to.have.text('Delete');

      expect(wrapper.find('button').at(2)).to.have.prop('onClick').equal(props.onHide);
      expect(wrapper.find('button').at(2)).to.have.text('Close');
    });

    it('should open <UpdateModeModal /> when Edit button is clicked', () => {
      wrapper.find('button').at(0).simulate('click');

      expect(props.switchModal).to.have.been.calledOnce;
      expect(props.switchModal).to.have.been.calledWith(props.recipeId, 'update');
    });

    it('should open <DeleteModeModal /> when Delete button is clicked', () => {
      wrapper.find('button').at(1).simulate('click');

      expect(props.switchModal).to.have.been.calledOnce;
      expect(props.switchModal).to.have.been.calledWith(props.recipeId, 'delete');
    });
  });
});
