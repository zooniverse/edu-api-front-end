// "Passing arrow functions (“lambdas”) to Mocha is discouraged" - https://mochajs.org/#arrow-functions
/* eslint prefer-arrow-callback: 0, func-names: 0, 'react/jsx-boolean-value': ['error', 'always'] */
/* global describe, it, before, expect */

import React from 'react';
import { shallow } from 'enzyme';
import UserMenu from './UserMenu';

const user = {
  display_name: 'user'
};

const userMenuNavItems = [
  <a href="/">A link</a>
];

describe('<UserMenu />', function() {
  let wrapper;
  before(function() {
    wrapper = shallow(<UserMenu user={user} userMenuNavItems={userMenuNavItems} />);
  });

  it('should render without crashing', function() {});

  it('should render grommet Menu', function() {
    expect(wrapper.find('Menu')).to.have.lengthOf(1);
  });

  it('should render nav items', function() {
    const link = wrapper.find('a');
    expect(link).to.have.lengthOf(1);
  });
});
