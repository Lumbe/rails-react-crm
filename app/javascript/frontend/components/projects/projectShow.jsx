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
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      isEditing: false,
      id: this.props.match.params.id
    }
  }

  componentDidMount() {
    this.props.actions.loadProject(this.state.id);
  }

  componentWillUnmount() {
    this.props.actions.resetProject();
  }

  toggleEdit(isUpdated = false) {
    this.setState({isEditing: !this.state.isEditing});
    if (isUpdated) {
      this.props.actions.loadProject(this.state.id)
    }
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
        {this.state.isEditing ? <ProjectForm projectId={this.state.id} project={this.props.project} cancel={this.toggleEdit.bind(this, false)} toggleEdit={this.toggleEdit.bind(this)}/> : <ProjectDetail  project={this.props.project}/>}
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
