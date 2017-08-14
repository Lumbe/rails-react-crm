import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect, withRouter} from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'

class AppLayout extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = store.getState();
  //   // // console.log('props: ', this.props)
  //   // console.log('state: ', this.state)
  //   // this.state = this.defaultProps();
  // }
  // componentDidMount() {
    // const isAuthenticated = this.props.isAuthenticated || false
    // console.log(this.props)
  // }

  componentWillMount() {
    console.log('will mount props: ',this.props)
    
  }
  //
  // componentWillReceive() {
  //   console.log('did mount props: ',this.props)
  // }


  render() {
    // console.log('render', this.props)
    console.log('from render: ', this.props)
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header/>
        <Main/>
          <Component {...matchProps} />
        <Main/>
        <Footer/>
      </div>
    )} />
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser}
}


export default connect(mapStateToProps)(AppLayout)
