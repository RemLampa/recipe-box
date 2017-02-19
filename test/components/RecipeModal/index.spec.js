import RecipeModal from 'components/RecipeModal';

import { Modal } from 'react-bootstrap';

describe('<RecipeModal />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeModal />);
  });

  it('should be a Bootstrap Modal', () => {
    expect(wrapper).to.have.type(Modal);
  });
});
