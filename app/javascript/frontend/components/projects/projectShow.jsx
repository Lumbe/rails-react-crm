import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions'
import {Row} from 'react-bootstrap'
import ProjectHeader from './projectHeader'
import ProjectForm from './projectForm'
import ProjectDetail from './projectDetail'


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
  }

  componentDidMount() {
    var project_id = this.props.match.params.id;
    this.props.actions.loadProject(project_id);
  }

  componentWillUnmount() {
    this.props.actions.resetProject();
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  updateProjectState(event) {
    const target = event.target;
    const field = event.target.name;
    const project = this.props.project;
    project[field] = target.type === 'checkbox' ? target.checked : target.value;
    return this.setState({project: project});
  }

  uploadFile(event) {
    const target = event.target;
    const field = event.target.name;
    const project = this.props.project;
    project[field] = target.files[0];
    console.log(project);
    return this.setState({project: project});
  }
  buildFormData() {
    let formData = new FormData();
    // formData.append('project[]')
    let project = this.state.project;
    for (var prop in project) {
      if (prop === 'model') {
        formData.append(`project[${prop}]`, project[prop], project[prop].name )
      } else {
        formData.append(`project[${prop}]`, project[prop])
      }
      // console.log("obj." + `${prop}`  + " = " + project[prop]);
    }
    return formData;
    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+ ', '+ pair[1]);
    // }
    // console.log(formData.get('title'))
  }

  saveProject(event) {
    event.preventDefault();
    this.props.actions.updateProject(this.buildFormData()).then(response => {
      this.setState({isEditing: false});
    });
  }

  destroyProject(event) {
    event.preventDefault();
    if (confirm('Удалить проект ' + this.props.project.name + '?')) {
      this.props.actions.destroyProject(this.props.project).then(response => {
        this.props.history.push('/projects');
      });
    }
  }

  render() {
    return (
      <Row>
        <ProjectHeader
          isShow={true}
          onEditClick={this.toggleEdit.bind(this)}
          handleDestroy={this.destroyProject.bind(this)}
          isEditing={this.state.isEditing}
          title={this.props.project.title}
          description='Проект дома'/>
        {this.state.isEditing ? <ProjectForm project={this.props.project} uploadFile={this.uploadFile.bind(this)} onChange={this.updateProjectState.bind(this)} onSave={this.saveProject.bind(this)} onCancel={this.toggleEdit.bind(this)}/> : <ProjectDetail  project={this.props.project}/>}
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { project: state.project };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
