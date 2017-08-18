import React from 'react';
import {Link} from 'react-router-dom';
// import Routes from '../../routes';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import ProtectedLinks from './navigation/protectedLinks'
import PublicLinks from './navigation/publicLinks'
import UserLinks from './navigation/userLinks'

class Menu extends React.Component {
  render() {
    if (this.props.isAuthenticated) {
      return <div>
        <ProtectedLinks/>
        <UserLinks isAuthenticated={this.props.isAuthenticated}/>
      </div>
    } else {
      return (
        <div>
          <PublicLinks/>
          <UserLinks/>
        </div>
      )
    }
  }
}

export default Menu
