import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'

class User extends React.Component {
  render() {
    const user = this.props.currentUser;
    console.log(this.props);
    return (
      <div>
        Юзер:<br/>
        id: {user.id}
        <br/>
        email: {user.email}
        <br/>
        token: {user.token}
        <br/>
        first_name: {user.first_name}
        <br/>
        last_name: {user.last_name}
        <br/>
        departments: <ul>
          {user.departments.map((department, index) => {
            return <li key={index}>name: {department.name}; id: {department.id} </li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
