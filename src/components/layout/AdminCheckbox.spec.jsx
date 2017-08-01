// "Passing arrow functions (“lambdas”) to Mocha is discouraged" - https://mochajs.org/#arrow-functions
/* eslint prefer-arrow-callback: 0, func-names: 0, 'react/jsx-boolean-value': ['error', 'always'] */
/* global describe, it, before, expect */

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import AdminCheckbox from './AdminCheckbox';

describe('<AdminCheckbox />', function() {
  let wrapper;
  const onChangeSpy = sinon.spy();
  before(function() {
    wrapper = shallow(<AdminCheckbox onChange={onChangeSpy} />);
  });

  it('renders without crashing', function() {});

  it('renders a grommet <CheckBox />', function() {
    expect(wrapper.find('CheckBox')).to.have.lengthOf(1);
  });

  it('calls onChange prop when clicked', function() {
    wrapper.find('CheckBox').simulate('change');
    expect(onChangeSpy.calledOnce).to.be.true();
  });
});
