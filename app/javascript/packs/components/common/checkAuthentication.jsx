import React from 'react'
import {connect} from 'react-redux';

export default function(WrappedComponent) {
  class CheckAuthentication extends React.Component {
    componentWillMount() {
      console.log('wil mount props: ',this.props)
    }

    // componentDidMount() {
    //   console.log('did mount props: ',this.props)
    // }

    componentWillUpdate() {
      console.log('will update mount props: ',this.props)
    }

    render() {
      console.log('check auth props: ',this.props)
      console.log('check auth state: ',this.state)
      return <WrappedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    console.log('mapping', state)
    return { isAuthenticated: state.currentUser.isAuthenticated }
  }

  return connect(mapStateToProps)(CheckAuthentication);
}
