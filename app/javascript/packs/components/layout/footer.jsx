import React from 'react'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: 'CRM'}
  }

  render() {
  return <footer id="footer">
    <Grid fluid>
      <p className="text-center footer-text">Some footer text here</p>
    </Grid>
  </footer>
  }
}

export default Footer
