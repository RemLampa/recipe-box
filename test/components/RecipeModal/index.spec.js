import RecipeModal from 'components/RecipeModal';

import { Modal } from 'react-bootstrap';

import CreateModeModal from 'components/RecipeModal/CreateModeModal';
import ReadModeModal from 'components/RecipeModal/ReadModeModal';
import UpdateModeModal from 'components/RecipeModal/UpdateModeModal';
import DeleteModeModal from 'components/RecipeModal/DeleteModeModal';

describe('<RecipeModal />', () => {
  let props, wrapper, testRecipe;

  const buildWrapper = (isHidden, recipe, recipeId, mode) => {
    props = {
      isHidden,
      recipe,
      recipeId,
      mode,
      onCreate: spy(),
      onUpdate: spy(),
      onDelete: spy(),
      onHide: spy(),
      switchModal: spy()
    };

    wrapper = shallow(<RecipeModal {...props} />);
  }

  beforeEach(() => {
    buildWrapper(false, null, null, 'create');
  })

  it('should be a Bootstrap Modal with required attributes', () => {
    expect(wrapper).to.have.type(Modal);

    expect(wrapper).to.have.prop('show').equal(true);
    expect(wrapper).to.have.prop('onHide').equal(props.onHide);
  });

  context('Init Mode', () => {
    beforeEach(() => {
      buildWrapper(true, null, null, '');
    });

    it('should render blank Modal', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.not.have.descendants(ReadModeModal);
      expect(wrapper).to.not.have.descendants(UpdateModeModal);
      expect(wrapper).to.not.have.descendants(DeleteModeModal);
    });
  });

  context('Create Mode', () => {
    beforeEach(() => {
      buildWrapper(false, null, null, 'create');
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
      testRecipe = { test: 'test '};

      buildWrapper(false, testRecipe, 2, 'read');
    });

    it('should ONLY contain <ReadModeModal /> with required props', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.have.exactly(1).descendants(ReadModeModal);
      expect(wrapper).to.not.have.descendants(UpdateModeModal);
      expect(wrapper).to.not.have.descendants(DeleteModeModal);

      expect(wrapper.find(ReadModeModal)).to.have.prop('recipeId').equal(props.recipeId);
      expect(wrapper.find(ReadModeModal)).to.have.prop('recipe').equal(props.recipe);
      expect(wrapper.find(ReadModeModal)).to.have.prop('onHide').equal(props.onHide);
      expect(wrapper.find(ReadModeModal)).to.have.prop('switchModal').equal(props.switchModal);
    });

  });

  context('Update Mode', () => {
    beforeEach(() => {
      testRecipe = { test: 'test '};

      buildWrapper(false, testRecipe, 2, 'update');
    });

    it('should ONLY contain <UpdateModeModal />', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.not.have.descendants(ReadModeModal);
      expect(wrapper).to.have.exactly(1).descendants(UpdateModeModal);
      expect(wrapper).to.not.have.descendants(DeleteModeModal);

      expect(wrapper.find(UpdateModeModal)).to.have.prop('recipeId').equal(props.recipeId);
      expect(wrapper.find(UpdateModeModal)).to.have.prop('recipe').equal(props.recipe);
      expect(wrapper.find(UpdateModeModal)).to.have.prop('onSave').equal(props.onUpdate);
      expect(wrapper.find(UpdateModeModal)).to.have.prop('switchModal').equal(props.switchModal);
    });
  });

  context('Delete Mode', () => {
    beforeEach(() => {
      testRecipe = { test: 'test '};

      buildWrapper(false, testRecipe, 2, 'delete');
    });

    it('should ONLY contain <DeleteModeModal />', () => {
      expect(wrapper).to.not.have.descendants(CreateModeModal);
      expect(wrapper).to.not.have.descendants(ReadModeModal);
      expect(wrapper).to.not.have.descendants(UpdateModeModal);
      expect(wrapper).to.have.exactly(1).descendants(DeleteModeModal);

      expect(wrapper.find(DeleteModeModal)).to.have.prop('recipeId').equal(props.recipeId);
      expect(wrapper.find(DeleteModeModal)).to.have.prop('recipe').equal(props.recipe);
      expect(wrapper.find(DeleteModeModal)).to.have.prop('onDelete').equal(props.onDelete);
      expect(wrapper.find(DeleteModeModal)).to.have.prop('onCancel').equal(props.switchModal);
    });
  });
});
