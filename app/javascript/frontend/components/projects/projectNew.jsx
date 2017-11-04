import React from 'react';
import {Row} from 'react-bootstrap'
import ProjectHeader from './projectHeader';
import ProjectForm from './projectForm';
import initialState from '../../reducers/initialState'

class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return { project: initialState.project};
  }

  cancel() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Row>
        <ProjectHeader isNew={true} title="Новый проект" description=""/>
        <ProjectForm project={this.state.project} cancel={this.cancel.bind(this)}/>
      </Row>
    );
  }
}

export default ProjectNew;
