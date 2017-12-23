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
    <Card style={{width: "419px",  height: "192px"}}>
      <CardBody>
        <div style={{height: "150px", display: "table", "alignItems": "center",float: "left"}}>
          <img src={"data:image/png;base64, " + props.project.image} style={{width: "150px", height: "150px"}} />
        </div>
        <div style={{height: "150px",display: "table", float: "right"}}>
          <div style={{display: "table-cell", "verticalAlign": "middle"}}>
            <CardTitle style={{"fontSize": "14px", "fontWeight": "bold","width": "200px", "textOverflow": "ellipsis","overflow": "hidden" , "height": "30px"}}>
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
        </div>
      </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
