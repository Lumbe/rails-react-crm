import React from 'react'
import {PageHeader, Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";

class NavMenu extends React.Component {

  render() {
    return (
      <PageHeader className="page-header-default">
        <Nav bsStyle="pills" style={{fontSize: "16px"}}>
          <IndexLinkContainer to="/admin/users">
            <NavItem eventKey={1}>
              Пользователи
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/admin/departments">
            <NavItem eventKey={2}>
              Представительства
            </NavItem>
          </LinkContainer>
        </Nav>
      </PageHeader>
    )
  }
}

export default NavMenu