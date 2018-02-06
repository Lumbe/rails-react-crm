import React from 'react'
import {connect} from 'react-redux'
import {Route, withRouter} from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'

class ProtectedAppLayout extends React.Component {
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
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header isAuthenticated={this.props.currentUser.isAuthenticated}/>
        <Main>
          <Component {...matchProps} />
        </Main>
        <Footer/>
      </div>
    )} />
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser}
}


export default withRouter(connect(mapStateToProps)(ProtectedAppLayout))
