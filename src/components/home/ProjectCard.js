import React from 'react';
import {PropTypes} from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <Card className="project-card">
      <CardBody>
        <img src={"data:image/png;base64, " + props.project.image} className="project-card-image" />

        <div className="project-card-text-block">
          <CardTitle className="project-card-title">
            {props.project.name}
          </CardTitle>
          <CardText tag="div">
            <p>Current production release</p>
            <ul><li>{props.project.currentProductionRelease}</li></ul>
            <div>
              <span style={{color: "blue"}}>View more</span>
              <span style={{float: "right", color: "blue"}}>Edit</span>
            </div>
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
