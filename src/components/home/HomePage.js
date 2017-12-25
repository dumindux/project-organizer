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
  constructor(props) {
    super(props);
  }

  render() {
    const projectsToRender = this.props.projects.filter(project => project.name.indexOf(this.props.searchText) !== -1)
    const cols = [];
    for (let i = 0; i < projectsToRender.length; i += 3) {
      cols.push([]);
      for (let j = i; (j < i+3) && (j < projectsToRender.length); j++) {
        cols[cols.length - 1].push(<Col key={projectsToRender[j].key} xs={12} md ={4}>
          <ProjectCard project={projectsToRender[j]}/>
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
  projects: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    searchText: state.searchText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
