import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Leads from './components/leads/leads'
import Users from './components/users/users'

class Routes extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/leads" component={Leads}/>
      <Route path="/users" component={Users}/>
    </Switch>
  }
}

export default Routes
