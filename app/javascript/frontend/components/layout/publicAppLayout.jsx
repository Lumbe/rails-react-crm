import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'

class PublicAppLayout extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={matchProps => (
      <div>
        <Header isPublic={true}/>
        <Main>
          <Component {...matchProps} />
        </Main>
        <Footer/>
      </div>
    )} />
  }
}

export default PublicAppLayout
