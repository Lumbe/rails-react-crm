import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './components/layout/main'
import Home from './components/pages/home'
import Leads from './components/leads/leads'
import Users from './components/users/users'
import NotFound from './components/errors/notFound'

class Routes extends React.Component {
  render() {
    return <Main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/leads" component={Leads}/>
        <Route path="/users" component={Users}/>
        <Route component={NotFound}/>
      </Switch>
    </Main>
  }
}

export default Routes
