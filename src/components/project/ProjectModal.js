import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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
  }

  render() {
    //toggle={this.toggle}
    //{this.props.project}
    return (
    <Modal isOpen={false} className="modal-lg">
      <ModalHeader style={{"textAlign": "center", "display": "block"}}>Payments Onboarding API</ModalHeader>
      <ModalBody>
        <img src="https://www.cc.gatech.edu/grads/l/lmmc3/images/bitbucket1600.png" style={{width: "200px", height: "200px"}} className="mx-auto d-block" />

        <Card className="list-margin-top">
          <CardHeader>
            <img width="20" height="20" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className="img-margin-right"/>
            <span className="topic-vertical-align">Git repository</span>
          </CardHeader>
          <CardBody>
            <ul>
              <li className="bullet-repo remove-list-style">Host - BitBucket</li>
              <li className="bullet-repo remove-list-style">URL - <a href="https://stash.leapset.com/projects/PG/repos/master-mono/browse" target="_blank">https://stash.leapset.com/projects/PG/repos/master-mono/browse</a></li>
            </ul>
          </CardBody>
        </Card>

        <Card className="list-margin-top">
          <CardHeader>
            <div>
              <img width="20" height="20" src="https://d30y9cdsu7xlg0.cloudfront.net/png/506714-200.png"  className="img-margin-right"/>
              <span className="topic-vertical-align">Contributors</span>
            </div>
          </CardHeader>
          <CardBody>
            <ul>
              <li className="bullet-contributor remove-list-style"><a href="https://www.linkedin.com/in/dumindubuddhika/" target="_blank">Dumindu Buddhika</a></li>
              <li className="bullet-contributor remove-list-style"><a href="https://www.linkedin.com/in/dumindubuddhika/" target="_blank">Dumindu Buddhika</a></li>
            </ul>
          </CardBody>
        </Card>
        <Card className="list-margin-top">
          <CardHeader>
            <div>
              <img width="20" height="20" src="https://www.governmentjobs.com/Content/Images/CategoryIcons/building-maintenance.png" className="img-margin-right"/>
              <span className="topic-vertical-align">Maintainer</span>
            </div>
          </CardHeader>
          <CardBody>
            <ul>
              <li className="bullet-contributor remove-list-style"><a href="https://www.linkedin.com/in/dumindubuddhika/" target="_blank">Dumindu Buddhika</a></li>
            </ul>
          </CardBody>
        </Card>
        <Card className="list-margin-top">
          <CardHeader>
            <div>
              <img width="20" height="20" src="http://softwaremanagementblog.net/wp-content/uploads/2015/05/icon_deployment-300x300.png" className="img-margin-right"/>
              <span className="topic-vertical-align">Current Production Release</span>
            </div>
          </CardHeader>
          <CardBody>
            <ul>
              <li className="bullet-release remove-list-style"><a href="https://stash.leapset.com/projects/PG/repos/master-mono/browse?at=refs%2Fheads%2Frelease%2F4.6.0" target="_blank">release/4.4.0</a></li>
            </ul>
          </CardBody>
        </Card>
        <Card className="list-margin-top">
          <CardHeader>
            <div>
              <img width="20" height="20" src="https://cdn.iconverticons.com/files/png/a8dda0e01bb0031b_256x256.png" className="img-margin-right"/>
              <span className="topic-vertical-align">Jira Issues</span>
            </div>
          </CardHeader>
          <CardBody>
            <ul>
              <li className="bullet-jira remove-list-style">Link 1 - <a href="https://jira.leapset.com/browse/PG-2113?jql=%22Epic%20Name%22%20~%20chargeback-tool" target="_blank">view issues</a></li>
              <li className="bullet-jira remove-list-style">Link 2 - <a href="https://jira.leapset.com/browse/PG-2113?jql=%22Epic%20Name%22%20~%20chargeback-tool" target="_blank">view issues</a></li>
            </ul>
          </CardBody>
        </Card>
        <Card className="list-margin-top">
          <CardHeader>
            <div>
              <img width="20" height="20" src="https://developer.atlassian.com/imgs/confluence.png" className="img-margin-right"/>
              <span className="topic-vertical-align">Wiki Articles</span>
            </div>
          </CardHeader>
          <CardBody>
            <ul>
              <li className="bullet-wiki remove-list-style">Article 1 - <a href="https://jira.leapset.com/browse/PG-2113?jql=%22Epic%20Name%22%20~%20chargeback-tool" target="_blank">view article</a></li>
              <li className="bullet-wiki remove-list-style">Article 2 - <a href="https://jira.leapset.com/browse/PG-2113?jql=%22Epic%20Name%22%20~%20chargeback-tool" target="_blank">view article</a></li>
            </ul>
          </CardBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
    );
  }
}

ProjectModal.propTypes = {
  project: PropTypes.object
};

function mapStateToProps(state) {
  return {
    project: state.project
  };
}

export default connect(mapStateToProps)(ProjectModal);
