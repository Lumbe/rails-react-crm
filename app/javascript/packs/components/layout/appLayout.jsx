import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect, withRouter} from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'

class AppLayout extends React.Component {
  componentWillMount() {
    // const isAuthenticated = this.props.isAuthenticated || false
    console.log(this.props)
  }

  render() {
    console.log('render', this.props)
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header/>
        <Main/>
          {/* {this.props.isAuthenticated ? (
            <Component {...matchProps} />
          ) : (
            <Redirect to={{
              pathname: '/users/sign-in',
              state: { from: matchProps.location }
            }}/>
          )} */}
        <Main/>
        <Footer/>
      </div>
    )} />
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.currentUser.isAuthenticated }
}

export default withRouter(connect(mapStateToProps)(AppLayout))
