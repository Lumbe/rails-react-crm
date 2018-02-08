import React from 'react'
import {Grid} from 'react-bootstrap'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: 'CRM'}
  }

  componentDidMount() {
    function resize() {
      let heights = window.innerHeight;
      let headerHeight = document.getElementById('header').clientHeight;
      let footerHeight = document.getElementById('footer').clientHeight;
      document.getElementById('main-container').style.minHeight = heights - headerHeight - footerHeight +'px';
    }
    resize();
    window.onresize = () => {
      resize();
    }

  }

  render() {
    return <Grid id="main-container" fluid>
      {this.props.children}
    </Grid>
  }
}

export default Main
