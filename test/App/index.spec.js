import App from 'App';

import RecipeList from 'components/RecipeList';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should be a div', () => {
    expect(wrapper).to.have.type('div');
  });

  it('should render <RecipeList />', () => {
    expect(wrapper).to.contain(<RecipeList />);
  });
});
