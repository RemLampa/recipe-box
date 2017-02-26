import UpdateModeModal from 'components/RecipeModal/UpdateModeModal';

import { Modal } from 'react-bootstrap';

describe('<UpdateModeModal />', () => {
  let wrapper, instance, props, state;

  beforeEach(() => {
    props = {
      recipeId: 2,
      recipe: {
        name: 'test',
        description: 'this is a test recipe',
        ingredients: 'apple,oranges,kiwis,bananas'
      },
      onSave: spy(),
      switchModal: spy()
    };

    wrapper = shallow(<UpdateModeModal {...props} />);

    instance = wrapper.instance();
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  it('should have a method onChangeHandler that updates component state', () => {
    const event = {
      target: {
        name: 'ingredients',
        value: 'updated ingredients'
      },
      preventDefault: spy()
    };

    const setStateSpy = stub(instance, 'setState');

    instance.onChangeHandler(event);

    expect(event.preventDefault).to.have.been.calledOnce;
    expect(setStateSpy).to.have.been.calledOnce;
    expect(setStateSpy).to.have.been.calledWith({[event.target.name]: event.target.value});

    setStateSpy.restore();
  });

  it('should have a method onSubmitHandler that calls props.onSave', () => {
    const newState = {
      name: 'test',
      description: 'this is a test recipe',
      ingredients: 'apple,oranges,kiwis,bananas'
    };

    wrapper.setState(newState);

    instance.onSubmitHandler();

    expect(props.onSave).to.have.been.calledOnce;
    expect(props.onSave).to.have.been.calledWith(props.recipeId, newState);
  });

  it('should have a method onCancelHandler that calls props.switchModal', () => {
    instance.onCancelHandler();

    expect(props.switchModal).to.have.been.calledOnce;
    expect(props.switchModal).to.have.been.calledWith(props.recipeId, 'read');
  })


  describe('<Modal.Header />', () => {
    it('should contain proper Modal Header', () => {
      const mountedWrapper = mount(<UpdateModeModal {...props} />);

      expect(wrapper).to.have.exactly(1).descendants(Modal.Header);
      expect(wrapper.find(Modal.Header)).to.have.exactly(1).descendants(Modal.Title);
      expect(mountedWrapper.find(Modal.Title)).to.have.text('Edit Recipe');
    });
  });

  describe('<Modal.Body />', () => {
    it('should contain a Modal Body', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Body);
    });

    it('should contain a form', () => {
      expect(wrapper.find(Modal.Body)).to.have.exactly(1).descendants('form');
    });

    it('should have proper input elements with proper attributes', () => {
      expect(wrapper.find('form')).to.have.exactly(2).descendants('input');
      expect(wrapper.find('form')).to.have.exactly(1).descendants('textarea');

      expect(wrapper.find('input').at(0)).to.have.attr('type').equal('text');
      expect(wrapper.find('input').at(0)).to.have.attr('name').equal('name');
      expect(wrapper.find('input').at(0)).to.have.attr('value').equal(props.recipe.name);
      expect(wrapper.find('input').at(0)).to.have.prop('onChange').equal(instance.onChangeHandler);

      expect(wrapper.find('input').at(1)).to.have.attr('type').equal('text');
      expect(wrapper.find('input').at(1)).to.have.attr('name').equal('description');
      expect(wrapper.find('input').at(1)).to.have.attr('value').equal(props.recipe.description);
      expect(wrapper.find('input').at(1)).to.have.prop('onChange').equal(instance.onChangeHandler);

      expect(wrapper.find('textarea').at(0)).to.have.attr('name').equal('ingredients');
      expect(wrapper.find('textarea').at(0)).to.have.prop('value').equal(props.recipe.ingredients);
      expect(wrapper.find('textarea').at(0)).to.have.prop('onChange').equal(instance.onChangeHandler);
    });
  });

  describe('<Modal.Footer />', () => {
    it('should contain a Modal Footer', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Footer);
    });

    it('should contain proper buttons for saving and cancelling', () => {
      expect(wrapper.find(Modal.Footer)).to.have.exactly(2).descendants('button');

      expect(wrapper.find('button').at(0)).to.have.prop('onClick').equal(instance.onSubmitHandler);
      expect(wrapper.find('button').at(0)).to.have.text('Save');

      expect(wrapper.find('button').at(1)).to.have.prop('onClick').equal(instance.onCancelHandler);
      expect(wrapper.find('button').at(1)).to.have.text('Cancel');
    });
  });
});
