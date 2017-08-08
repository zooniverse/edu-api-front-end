import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

const TesterHome = (props) => {
  return (
    <div>
      ...
    </div>
  );
};

TesterHome.propTypes = {};

TesterHome.defaultProps = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(TesterHome);
