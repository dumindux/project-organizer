import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';

import{
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.exit = this.exit.bind(this);
  }

  exit() {
    this.props.actions.showModal(false);
  }

  render() {
    if (this.props.project.show && this.props.project.project) {
      return (
        <Modal isOpen={this.props.project.show} className="modal-lg" toggle={this.exit}>
          <ModalHeader style={{
            "textAlign": "center",
            "display": "block"
          }}>{this.props.project.project.name}</ModalHeader>
          <ModalBody>
            <img src={"data:image/png;base64, " + this.props.project.project.image}
                 style={{width: "200px", height: "200px"}} className="mx-auto d-block"/>

            <Card className="list-margin-top">
              <CardHeader>
                <img width="20" height="20" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                     className="img-margin-right"/>
                <span className="topic-vertical-align">Git repository</span>
              </CardHeader>
              <CardBody>
                <ul>
                  <li className="bullet-repo remove-list-style">Host - {this.props.project.project['git-repo'].host}</li>
                  <li className="bullet-repo remove-list-style">URL - <a
                    href={this.props.project.project['git-repo'].url} target="_blank">{this.props.project.project['git-repo'].url}</a>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="list-margin-top">
              <CardHeader>
                <div>
                  <img width="20" height="20" src="https://d30y9cdsu7xlg0.cloudfront.net/png/506714-200.png"
                       className="img-margin-right"/>
                  <span className="topic-vertical-align">Contributors</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul>
                  {this.props.project.project.contributors.map((contributor, index) => (<li key={index} className="bullet-contributor remove-list-style"><a
                    href={contributor[1]} target="_blank">{contributor[0]}</a></li>))}
                </ul>
              </CardBody>
            </Card>
            <Card className="list-margin-top">
              <CardHeader>
                <div>
                  <img width="20" height="20"
                       src="https://www.governmentjobs.com/Content/Images/CategoryIcons/building-maintenance.png"
                       className="img-margin-right"/>
                  <span className="topic-vertical-align">Maintainer</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul>
                  <li className="bullet-contributor remove-list-style"><a
                    href={this.props.project.project.maintainer[1]} target="_blank">{this.props.project.project.maintainer[0]}</a></li>
                </ul>
              </CardBody>
            </Card>
            <Card className="list-margin-top">
              <CardHeader>
                <div>
                  <img width="20" height="20"
                       src="http://softwaremanagementblog.net/wp-content/uploads/2015/05/icon_deployment-300x300.png"
                       className="img-margin-right"/>
                  <span className="topic-vertical-align">Current Production Release</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul>
                  <li className="bullet-release remove-list-style"><a
                    href={this.props.project.project.currentProductionRelease[1]}
                    target="_blank">{this.props.project.project.currentProductionRelease[0]}</a></li>
                </ul>
              </CardBody>
            </Card>
            <Card className="list-margin-top">
              <CardHeader>
                <div>
                  <img width="20" height="20" src="https://cdn.iconverticons.com/files/png/a8dda0e01bb0031b_256x256.png"
                       className="img-margin-right"/>
                  <span className="topic-vertical-align">Jira Issues</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul>
                  {this.props.project.project.jiraIssues.map((issue, index) => (<li key={index} className="bullet-jira remove-list-style">Link {index + 1} - <a
                    href={issue}
                    target="_blank">view issues</a></li>))}
                </ul>
              </CardBody>
            </Card>
            <Card className="list-margin-top">
              <CardHeader>
                <div>
                  <img width="20" height="20" src="https://developer.atlassian.com/imgs/confluence.png"
                       className="img-margin-right"/>
                  <span className="topic-vertical-align">Wiki Articles</span>
                </div>
              </CardHeader>
              <CardBody>
                <ul>
                  {this.props.project.project.wikiArticles.map((article, index) => (<li key={index} className="bullet-wiki remove-list-style">Article {index + 1} - <a
                    href={article}
                    target="_blank">view article</a></li>))}
                </ul>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.exit}>Cancel</Button>
          </ModalFooter>
        </Modal>
      );
    } else if (this.props.project.show && !this.props.project.project) {
      return (
        <div>
          <div className="overlay"></div>
          <div className="loader"></div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    project: state.project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
