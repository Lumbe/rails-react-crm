import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import {Row} from 'react-bootstrap'
import ProjectHeader from './projectHeader';
import ProjectForm from './projectForm';
import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://crm-prod.ztrr4s9yri.eu-west-1.elasticbeanstalk.com' : 'http://localhost:5000';


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
    // this.buildFormData();
    axios.post('/api/v1/projects',this.buildFormData()).then(response => {
      this.setState({isEditing: false});
    });
  }

  // saveProject(e) {
  //   (e).preventDefault();
  //   this.props.actions.createProject(this.state.project).then(response => {
  //     this.props.history.push(response.data.project.id.toString());
  //   });
  // }

  render() {
    return (
      <Row>
        <ProjectHeader isNew={true} title="Новый проект" description=""/>
        <ProjectForm project={this.state.project} uploadFile={this.uploadFile.bind(this)} onChange={this.updateProjectState.bind(this)} onSave={this.saveProject.bind(this)}/>
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
