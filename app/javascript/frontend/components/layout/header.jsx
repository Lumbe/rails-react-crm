import React from 'react'
import {Navbar} from 'react-bootstrap';
import Menu from './menu'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <Navbar fluid={true} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              CRM
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Menu isAuthenticated={this.props.isAuthenticated}/>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header
