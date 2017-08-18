import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import * as authActions from '../../../actions/authActions'


class UserLinks extends React.Component {
  handleLogout() {
    this.props.actions.destroyUserSession();
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Nav pullRight>
        <NavDropdown eventKey={3} title={"Привет, " + this.props.currentUser.email} id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3} onClick={this.handleLogout.bind(this)}>Выйти</MenuItem>
        </NavDropdown>
      </Nav>
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

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLinks)
