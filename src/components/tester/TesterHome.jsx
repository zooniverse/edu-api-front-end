import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import {
  CLASSROOMS_STATUS, CLASSROOMS_INITIAL_STATE, CLASSROOMS_PROPTYPES,
} from '../../ducks/classrooms';

class TesterHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Actions.getClassrooms();
  }

  render() {
    return (
      <div>
        <h1>CLASSROOMS</h1>
        {this.render_status()}
        {this.props.status === CLASSROOMS_STATUS.SUCCESS &&
          this.props.classrooms.map((classroom, i)=>{
          return (
            <div key={`classroom_${i}`}>
              <h2>[{classroom.id}] {classroom.name}</h2>
              <p>Description: {classroom.description}</p>
            </div>
          );
        })}
      </div>
    );
  }

  render_status() {
    if (this.props.status === CLASSROOMS_STATUS.FETCHING) {
      return (<div>Loading...</div>);
    } else if (this.props.status === CLASSROOMS_STATUS.ERROR) {
      return (<div>ERROR!</div>);
    }
      
    return null;
  }
}

TesterHome.propTypes = {
  ...CLASSROOMS_PROPTYPES,
};

TesterHome.defaultProps = {
  ...CLASSROOMS_INITIAL_STATE,
};

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  error: state.classrooms.error,
  status: state.classrooms.status,
});

export default connect(mapStateToProps)(TesterHome);
