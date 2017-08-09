import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import {
  CLASSROOMS_STATUS, CLASSROOMS_INITIAL_STATE, CLASSROOMS_PROPTYPES,
} from '../../ducks/classrooms';
  
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

class ClassroomManagerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Actions.getClassrooms();
  }

  render() {
    return (
      <Section>
        <Heading tag="h3">Classrooms</Heading>
        {this.render_status()}
        <List>
          {this.props.status === CLASSROOMS_STATUS.SUCCESS &&
            this.props.classrooms.map((classroom, i)=>{
            return (
              <ListItem key={`classroom_${i}`}>
                <div>{classroom.id}</div>
                <div>{classroom.name}</div>
                <div>{classroom.description}</div>
              </ListItem>
            );
          })}
        </List>
      </Section>
    );
  }

  render_status() {
    if (this.props.status === CLASSROOMS_STATUS.FETCHING) {
      return (<div>Loading...</div>);
    } else if (this.props.status === CLASSROOMS_STATUS.ERROR) {
      return (<div>ERROR!</div>);
    } else if (this.props.status === CLASSROOMS_STATUS.SUCCESS) {
      return (<div>Ready!</div>);
    }
      
    return null;
  }
}

ClassroomManagerContainer.propTypes = {
  ...CLASSROOMS_PROPTYPES,
};

ClassroomManagerContainer.defaultProps = {
  ...CLASSROOMS_INITIAL_STATE,
};

const mapStateToProps = (state) => ({
  classrooms: state.classrooms.classrooms,
  error: state.classrooms.error,
  status: state.classrooms.status,
});

export default connect(mapStateToProps)(ClassroomManagerContainer);
