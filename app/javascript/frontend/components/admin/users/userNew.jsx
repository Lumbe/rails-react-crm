import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/admin/userActions';
import {Row} from 'react-bootstrap'
import UserHeader from './userHeader';
import UserForm from './userForm';
import {SubmissionError} from 'redux-form'

class UserNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        admin: false,
      }
    }
  }

  handleFormSubmit(values) {
    return this.props.actions.createUser(values).then(
      response => {
        this.props.history.push(response.data.user.id.toString());
      },
      error => {
        console.log('error response',error.response.data.errors);
        throw new SubmissionError(error.response.data.errors)
      }
    )
  }

  handleCancel() {
    this.props.history.goBack();
  }

  render() {
    const {availableDepartments} = this.props;
    return (
      <Row>
        <UserHeader isNew={true} title="Новый лид" description=""/>
        <UserForm
          user={this.state.user}
          availableDepartments={availableDepartments}
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        />
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    availableDepartments: state.currentUser.departments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNew);
