import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

class ProtectedLinks extends React.Component {
  render() {
    return (
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem eventKey={1}>Главная</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/leads">
          <NavItem eventKey={2}>Лиды</NavItem>
        </LinkContainer>
        <LinkContainer to="/house-projects">
          <NavItem eventKey={4}>Проекты домов</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }
}

export default ProtectedLinks
