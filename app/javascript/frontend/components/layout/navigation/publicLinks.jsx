import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

class PublicLinks extends React.Component {
  render() {
    return (
      <Nav>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>О нас</NavItem>
        </LinkContainer>
      </Nav>
    )
  }
}

export default PublicLinks
