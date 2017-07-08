import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './components/layout/main'
import Home from './components/pages/home'
import Leads from './components/leads/leads'
import LeadShow from './components/leads/leadShow'
import LeadNew from './components/leads/leadNew'
import Users from './components/users/users'
import NotFound from './components/errors/notFound'

class Routes extends React.Component {
  render() {
    return <Main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/leads/new" component={LeadNew}/>
        <Route exact path="/leads/:id" component={LeadShow}/>
        <Route exact path="/leads" component={Leads}/>
        <Route exact path="/users" component={Users}/>
        <Route component={NotFound}/>
      </Switch>
    </Main>
  }
}

export default Routes
