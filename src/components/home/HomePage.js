import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import{
  Row,
  Col
} from 'reactstrap';

class HomePage extends React.Component {
  render() {
    const cols = [];
    for (let i = 0; i < this.props.projects.length; i += 3) {
      cols.push([]);
      for (let j = i; (j < i+3) && (j < this.props.projects.length); j++) {
        cols[cols.length - 1].push(<Col key={this.props.projects[j].key} xs={12} md ={4}>
          <ProjectCard project={this.props.projects[j]}/>
        </Col>);
      }
    }
    return (
      <div>
        {cols.map((row, index) => {
          return <Row key={index} style={{"marginTop": "20px"}}>{row}</Row>;
        })}
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
