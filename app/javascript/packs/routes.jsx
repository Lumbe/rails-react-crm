import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Leads from './pages/leads'

class Routes extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/leads" component={Leads}/>
    </Switch>
  }
}

export default Routes
