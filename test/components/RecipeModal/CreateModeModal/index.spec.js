import CreateModeModal from 'components/RecipeModal/CreateModeModal';

import { Modal } from 'react-bootstrap';

describe('<CreateModeModal />', () => {
  let wrapper, mountedWrapper, instance, mountedInstance, props, state;
  beforeEach(() => {
    props = {
      onCreate: spy(),
      onCancel: spy()
    };

    state = {
      name: 'test',
      description: 'test desc',
      ingredients: 'yep,yep'
    };

    wrapper = shallow(<CreateModeModal {...props} />);
    instance = wrapper.instance();
    mountedWrapper = mount(<CreateModeModal {...props} />);

    wrapper.setState(state);
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

  it('should have a method onSubmitHandler that calls props.onCreate', () => {
    instance.onSubmitHandler();

    expect(props.onCreate).to.have.been.calledOnce;
    expect(props.onCreate).to.have.been.calledWith(state);
  });

  describe('<Modal.Header />', () => {
    it('should contain a proper Modal Header', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Header);
      expect(wrapper.find(Modal.Header)).to.have.exactly(1).descendants(Modal.Title);
      expect(mountedWrapper.find(Modal.Title)).to.have.text('Create New Recipe');
    });
  });

  describe('<Modal.Body /> form', () => {
    it('should contain a form in Modal Body', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Body);
      expect(wrapper.find(Modal.Body)).to.have.exactly(1).descendants('form');
    });

    it('should have proper input elements with proper attributes', () => {
      expect(wrapper.find('form')).to.have.exactly(2).descendants('input');
      expect(wrapper.find('form')).to.have.exactly(1).descendants('textarea');

      expect(wrapper.find('input').at(0)).to.have.attr('type').equal('text');
      expect(wrapper.find('input').at(0)).to.have.attr('name').equal('name');
      expect(wrapper.find('input').at(0)).to.have.attr('value').equal(state.name);
      expect(wrapper.find('input').at(0)).to.have.prop('onChange').equal(instance.onChangeHandler);

      expect(wrapper.find('input').at(1)).to.have.attr('type').equal('text');
      expect(wrapper.find('input').at(1)).to.have.attr('name').equal('description');
      expect(wrapper.find('input').at(1)).to.have.attr('value').equal(state.description);
      expect(wrapper.find('input').at(1)).to.have.prop('onChange').equal(instance.onChangeHandler);

      expect(wrapper.find('textarea').at(0)).to.have.attr('name').equal('ingredients');
      expect(wrapper.find('textarea').at(0)).to.have.prop('value').equal(state.ingredients);
      expect(wrapper.find('textarea').at(0)).to.have.prop('onChange').equal(instance.onChangeHandler);
    });
  });

  describe('<Modal.Footer />', () => {
    it('should contain a proper Modal Footer', () => {
      expect(wrapper).to.have.exactly(1).descendants(Modal.Footer);
    });

    it('should contain proper buttons for saving and cancelling', () => {
      expect(wrapper.find(Modal.Footer)).to.have.exactly(2).descendants('button');

      expect(wrapper.find('button').at(0)).to.have.prop('onClick').equal(instance.onSubmitHandler);
      expect(wrapper.find('button').at(0)).to.have.text('Add Recipe');

      expect(wrapper.find('button').at(1)).to.have.prop('onClick').equal(props.onCancel);
      expect(wrapper.find('button').at(1)).to.have.text('Cancel');
    });
  });
});
