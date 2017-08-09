import React from 'react';

class NotAuthenticated extends React.Component {
  componentWillMount() {
    if (!this.props.currentUser.isAuthenticated) {
      replace({
        pathname: '/users/sign-in'
      })
    }
  }

  // render() {
  //   return (<h2>{console.log("page not found")}Page not found</h2>);
  // }
}

export default connect(mapStateToProps)(NotAuthenticated)
