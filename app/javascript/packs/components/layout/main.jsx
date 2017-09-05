import React from 'react'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {connect} from 'react-redux'
import Notifications from '../common/notifications'

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
        {this.props.notifications && <Notifications notifications={this.props.notifications}/>}
      {this.props.children}
    </Grid>
  }
}

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    };
}


export default connect(mapStateToProps)(Main);
