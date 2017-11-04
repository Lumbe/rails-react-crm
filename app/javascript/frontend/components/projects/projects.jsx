import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions'
import {Row, Col, Panel} from 'react-bootstrap'
import ProjectHeader from './projectHeader'
import ProjectsList from './projectsList'

class Projects extends React.Component {
  componentWillMount() {
    this.props.actions.loadProjects();
  }

  render() {
    return (
      <Row>
          <ProjectHeader isIndex={true}/>
        <Col md={12} xs={12}>
          <Panel>
            <ProjectsList meta={this.props.meta} projects={this.props.projects} load={this.props.actions.loadProjects}/>
          </Panel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects.projects,
    meta: state.projects.meta
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
