import React from 'react'
import NavMenu from './navMenu'
import {Row, Col} from 'react-bootstrap'

class Dashboard extends React.Component {

  render() {
    return (
      <Row>
        <Col md={12}><NavMenu/></Col>
        <Col md={12}>Dashboard</Col>
      </Row>
    )
  }
}

export default Dashboard