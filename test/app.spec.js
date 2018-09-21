import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../src/components/app.js';

describe('<App/>', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.container')).to.have.length(1);
  });

});
