import React from 'react'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: 'CRM'}
  }

  render() {
  return <Grid className="main-wrapper" fluid>
    {this.props.children}
  </Grid>
  }
}

export default Main
