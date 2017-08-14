import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Main from './components/layout/main'
import Home from './components/pages/home'
import Leads from './components/leads/leads'
import LeadShow from './components/leads/leadShow'
import LeadNew from './components/leads/leadNew'
import User from './components/users/user'
import SignIn from './components/users/signIn'
import HouseProjects from './components/house_projects/houseProjects'
import NotFound from './components/errors/notFound'
import AppLayout from './components/layout/appLayout'
// import CheckAuthentication from './components/common/checkAuthentication'

class Routes extends React.Component {
  render() {
    const auth = this.props.currentUser
    return (
      <BrowserRouter>
        <Switch>
          <AppLayout exact path="/users/sign-in" component={SignIn}/>
          <AppLayout exact path="/" component={Home}/>
          <AppLayout exact path="/leads/new" component={LeadNew}/>
          <AppLayout exact path="/leads/:id" component={LeadShow}/>
          <AppLayout exact path="/leads" component={Leads}/>
          <AppLayout exact path="/users/current" component={User}/>
          <AppLayout exact path="/house-projects" component={HouseProjects}/>
          <AppLayout component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
