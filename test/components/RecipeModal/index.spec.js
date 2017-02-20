import RecipeModal from 'components/RecipeModal';

import { Modal } from 'react-bootstrap';

import CreateModeModal from 'components/RecipeModal/CreateModeModal';
import ReadModeModal from 'components/RecipeModal/ReadModeModal';
import UpdateModeModal from 'components/RecipeModal/UpdateModeModal';
import DeleteModeModal from 'components/RecipeModal/DeleteModeModal';

describe('<RecipeModal />', () => {
  let props, wrapper;

  const buildWrapper = (isHidden, recipe, mode) => {
    props = {
      isHidden,
      recipe,
      mode,
      onCreate: spy(),
      onUpdate: spy(),
      onDelete: spy(),
      onHide: spy()
    };

    wrapper = shallow(<RecipeModal {...props} />);
  }

  beforeEach(() => {
    buildWrapper(false, null, 'create');
  })

  it('should be a Bootstrap Modal with required attributes', () => {
    expect(wrapper).to.have.type(Modal);

    expect(wrapper).to.have.prop('show', true);
  });

  context('Create Mode', () => {
    beforeEach(() => {
      buildWrapper(false, null, 'create');
    });

    it('should ONLY contain <CreateModeModal /> with required props', () => {
      expect(wrapper).to.have.exactly(1).descendants(CreateModeModal);
      expect(wrapper).to.not.have.descendants(ReadModeModal);
      expect(wrapper).to.not.have.descendants(UpdateModeModal);
      expect(wrapper).to.not.have.descendants(DeleteModeModal);

      expect(wrapper.find(CreateModeModal)).to.have.prop('onCreate').equal(props.onCreate);
      expect(wrapper.find(CreateModeModal)).to.have.prop('onCancel').equal(props.onHide);
    });
  });

  context('Read Mode', () => {
    beforeEach(() => {
      buildWrapper(false, null, 'read');
    });

    it('should ONLY contain <ReadModeModal /> with required props', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.have.exactly(1).descendants(ReadModeModal);
      expect(wrapper).to.not.have.descendants(UpdateModeModal);
      expect(wrapper).to.not.have.descendants(DeleteModeModal);
    });

  });

  context('Update Mode', () => {
    beforeEach(() => {
      buildWrapper(false, null, 'update');
    });

    it('should ONLY contain <UpdateModeModal />', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.not.have.descendants(ReadModeModal);
      expect(wrapper).to.have.exactly(1).descendants(UpdateModeModal);
      expect(wrapper).to.not.have.descendants(DeleteModeModal);
    });
  });

  context('Delete Mode', () => {
    beforeEach(() => {
      buildWrapper(false, null, 'delete');
    });

    it('should ONLY contain <DeleteModeModal />', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.not.have.descendants(ReadModeModal);
      expect(wrapper).to.not.have.descendants(UpdateModeModal);
      expect(wrapper).to.have.exactly(1).descendants(DeleteModeModal);
    });
  });
});
