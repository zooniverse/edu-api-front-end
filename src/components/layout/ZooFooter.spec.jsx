// "Passing arrow functions (“lambdas”) to Mocha is discouraged" - https://mochajs.org/#arrow-functions
/* eslint prefer-arrow-callback: 0, func-names: 0, 'react/jsx-boolean-value': ['error', 'always'] */
/* global describe, it, before, expect */

import React from 'react';
import { shallow } from 'enzyme';
import ZooFooter from './ZooFooter';

describe('<ZooFooter />', function() {
  let wrapper;
  before(function() {
    wrapper = shallow(<ZooFooter />);
  });

  it('renders without crashing', function() {});

  it('renders grommet components', function() {
    expect(wrapper.find('Footer')).to.have.lengthOf(1);
    expect(wrapper.find('Section')).to.have.lengthOf(4);
    expect(wrapper.find('Columns')).to.have.lengthOf(1);
    expect(wrapper.find('Menu')).to.have.lengthOf(8);
    expect(wrapper.find('Anchor')).to.have.lengthOf(25);
    expect(wrapper.find('Button')).to.have.lengthOf(3);
    expect(wrapper.find('Image')).to.have.lengthOf(1);
  });

  it('renders <ZooniverseLogotype />', function() {
    expect(wrapper.find('ZooniverseLogotype')).to.have.lengthOf(1);
  });
});
