import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

export default function(WrappedComponent) {
  class CheckAuthentication extends React.Component {
    componentWillMount() {
      // console.log('wil mount props: ', this.props)
      // if (this.props.currentUser.isAuthenticated) {
        // <Redirect to={{
        //   pathname: '/users/sign-in',
        //   state: { from: this.props.location }
        // }}/>
      // }
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return { currentUser: state.currentUser}
  }

  return connect(mapStateToProps)(CheckAuthentication);
}
