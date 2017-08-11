import React from 'react'
import {connect} from 'react-redux';

class RequireAuthentication extends React.Component {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      // replace({pathname: '/users/sign-in'})
      
    }
  }

  // componentWillUpdate(nextProps) {
  //
  // }

  render() {
    console.log('auth logic')
    // return <ComposedComponent/>
  }

}

function mapStateToProps(state) {
  return { isAuthenticated: state.currentUser.isAuthenticated }
}

export default connect(mapStateToProps)(RequireAuthentication);
