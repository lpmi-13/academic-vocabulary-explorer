import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../src/components/home.js';

describe('<Home/>', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
