import Recipe from 'components/Recipe';

describe('<Recipe />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      recipeName: 'test'
    };

    wrapper = shallow(<Recipe {...props} />);
  });

  it('should be a li', () => {
    expect(wrapper).to.have.type('li');
  });

  it('should display recipe name', () => {
    expect(wrapper.find('li')).to.have.text(props.recipeName);
  });
});
