import React from 'react'
import {connect} from 'react-redux'
import {Route, withRouter} from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'
import Notifications from '../common/notifications'
import {Row, Col} from 'react-bootstrap'
import AdminMenu from './navigation/adminMenu'

class AdminAppLayout extends React.Component {
  componentWillMount() {
    if (!this.props.currentUser.isAuthenticated) {
      this.props.history.push('/users/sign-in')
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.currentUser.isAuthenticated !== nextProps.currentUser.isAuthenticated) {
      if (!nextProps.currentUser.isAuthenticated) {
        this.props.history.push('/users/sign-in');
      }
    }
  }


  render() {
    const { component: Component, notifications, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header isAuthenticated={this.props.currentUser.isAuthenticated}/>
        {notifications && <Notifications/>}
        <Main>
          <Row>
            <Col md={3} xs={12}>
              <AdminMenu/>
            </Col>
            <Col md={9} xs={12}>
              <Component {...matchProps} />
            </Col>
          </Row>
        </Main>
        <Footer/>
      </div>
    )} />
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    notifications: state.notifications
  }
}


export default withRouter(connect(mapStateToProps)(AdminAppLayout))
