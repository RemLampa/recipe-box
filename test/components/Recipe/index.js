import Recipe from 'components/Recipe';

describe('<Recipe />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      recipeName: 'test',
      id: 2,
      onClick: spy()
    };

    wrapper = shallow(<Recipe {...props} />);
  });

  it('should be a li', () => {
    expect(wrapper).to.have.type('li');
  });

  it('should display recipe name', () => {
    expect(wrapper.find('li')).to.have.text(props.recipeName);
  });

  it('should call props.onClick when clicked', () => {
    wrapper.simulate('click');

    expect(props.onClick).to.have.been.calledOnce;
    expect(props.onClick).to.have.been.calledWith(props.id, 'read');
  });
});
