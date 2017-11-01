import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import {Row} from 'react-bootstrap'
import ProjectHeader from './projectHeader';
import ProjectForm from './projectForm';

class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return { project: {
      name: '',
      phone: '',
      email: ''
    }};
  }

  updateProjectState(event) {
    const target = event.target;
    const field = event.target.name;
    const project = this.props.project;
    project[field] = target.type === 'checkbox' ? target.checked : target.value;
    return this.setState({project: project});
  }

  saveProject(e) {
    (e).preventDefault();
    this.props.actions.createProject(this.state.project).then(response => {
      this.props.history.push(response.data.project.id.toString());
    });
  }

  render() {
    return (
      <Row>
        <ProjectHeader isNew={true} title="Новый проект" description=""/>
        <ProjectForm project={this.state.project} onChange={this.updateProjectState.bind(this)} onSave={this.saveProject.bind(this)}/>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    project: state.project
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectNew);
