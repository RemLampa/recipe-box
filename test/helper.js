import React from 'react';

import chai, { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { spy, stub, mock, fakeServer } from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

global.React = React;
global.chai = chai;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.spy = spy;
global.stub = stub;
global.mock = mock;
global.fakeServer = fakeServer;
