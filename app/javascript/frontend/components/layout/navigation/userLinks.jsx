import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import * as authActions from '../../../actions/authActions'
import * as userActions from '../../../actions/userActions'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class UserLinks extends React.Component {
  // componentDidMount() {
  //   if (!this.props.currentUser) {
  //     this.props.userActions.loadCurrentUser()
  //   }
  // }

  handleLogout() {
    this.props.actions.destroyUserSession();
  }

  render() {
    const user = this.props.currentUser;
    if (this.props.isAuthenticated) {
      return (
        !user ?
          <FontAwesomeIcon icon="spinner" size="lg" pull="right" spin style={{color: '#fff'}}/>
          :
          <Nav pullRight>
            <NavDropdown eventKey={3} title={`${user.first_name} ${user.last_name}`} id="basic-nav-dropdown">
              <LinkContainer to="/admin"><MenuItem eventKey={3.1}>admin</MenuItem></LinkContainer>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3} onClick={this.handleLogout.bind(this)}>Выйти</MenuItem>
            </NavDropdown>
          </Nav>
      )
    } else {
      return (
        <Nav pullRight>
          <IndexLinkContainer to="/users/sign-in">
            <NavItem eventKey={4}>Войти</NavItem>
          </IndexLinkContainer>
        </Nav>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLinks)
