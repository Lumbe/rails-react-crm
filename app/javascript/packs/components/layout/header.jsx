import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap';
import Menu from './menu'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar fluid={true} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">JA CRM</a>
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
