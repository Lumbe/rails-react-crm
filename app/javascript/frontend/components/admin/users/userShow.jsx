import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/admin/userActions'
import {Row} from 'react-bootstrap'
import UserHeader from './userHeader'
import UserForm from './userForm'
import UserDetail from './userDetail'
import {getUser} from '../../../reducers/admin/userReducer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {SubmissionError} from 'redux-form'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
  }

  componentDidMount() {
    if (!this.props.user) {
      let user_id = this.props.match.params.id;
      this.props.actions.loadUser(user_id);
    }
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleFormSubmit(values) {
    return this.props.actions.updateUser(values).then(
      () => {
        this.setState({isEditing: false});
      },
      error => {
        throw new SubmissionError(error.response.data.errors)
      }
    );
  }

  destroyUser(event) {
    event.preventDefault();
    let user = this.props.user;
    if (confirm('Удалить пользователя ' + user.first_name + ' ' + user.last_name + '?')) {
      this.props.actions.destroyUser(this.props.user).then(() => {
        this.props.history.push('/admin/users');
      });
    }
  }

  render() {
    const {user, availableDepartments} = this.props;
    return (
      <Row>
        {!user ?
          <FontAwesomeIcon icon="spinner" spin/>
        :
          <div><UserHeader
            isShow={true}
            onEditClick={this.toggleEdit.bind(this)}
            handleDestroy={this.destroyUser.bind(this)}
            isEditing={this.state.isEditing}
            title={user.first_name + ' ' + user.last_name}
            description='Пользователь'/>
          {this.state.isEditing ?
            <UserForm
              user={user}
              availableDepartments={availableDepartments}
              handleFormSubmit={this.handleFormSubmit.bind(this)}
              onCancel={this.toggleEdit.bind(this)}
            />
            :
            <UserDetail  user={user}/>
          }</div>
        }
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let itemId = ownProps.match.params.id;
  return {
    user: getUser(state, itemId),
    availableDepartments: state.currentUser.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
