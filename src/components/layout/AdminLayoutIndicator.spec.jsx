// "Passing arrow functions (“lambdas”) to Mocha is discouraged" - https://mochajs.org/#arrow-functions
/* eslint prefer-arrow-callback: 0, func-names: 0, 'react/jsx-boolean-value': ['error', 'always'] */
/* global describe, it, before, expect */

import React from 'react';
import { shallow } from 'enzyme';
import AdminLayoutIndicator from './AdminLayoutIndicator';

describe('<AdminLayoutIndicator />', function() {
  it('renders without crashing', function() {
    const wrapper = shallow(<AdminLayoutIndicator />);
    expect(wrapper.type()).to.equal('div');
  });
});
