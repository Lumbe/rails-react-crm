import React from 'react'
import { Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/home'
import Leads from './components/leads/leads'
import LeadShow from './components/leads/leadShow'
import LeadNew from './components/leads/leadNew'
import User from './components/users/user'
import SignIn from './components/users/signIn'
import NotFound from './components/errors/notFound'
import About from './components/pages/about'
import ProtectedAppRoute from './components/layout/protectedAppLayout'
import PublicAppRoute from './components/layout/publicAppLayout'
import ProjectNew from './components/projects/projectNew'
import ProjectShow from './components/projects/projectShow'
import Projects from './components/projects/projects'
import Contacts from './components/contacts/contacts'
import ContactShow from './components/contacts/contactShow'
import ContactNew from './components/contacts/contactNew'
import Users from './components/admin/users/users'
import UserShow from './components/admin/users/userShow'
import UserNew from './components/admin/users/userNew'
import Dashboard from './components/admin/dashboard'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicAppRoute exact path="/about" component={About}/>
          <ProtectedAppRoute exact path="/users/sign-in" component={SignIn}/>
          <ProtectedAppRoute exact path="/admin/users/new" component={UserNew}/>
          <ProtectedAppRoute exact path="/admin/users/:id" component={UserShow}/>
          <ProtectedAppRoute exact path="/admin/users" component={Users}/>
          <ProtectedAppRoute exact path="/admin" component={Dashboard}/>
          <ProtectedAppRoute exact path="/" component={Home}/>
          <ProtectedAppRoute exact path="/leads/new" component={LeadNew}/>
          <ProtectedAppRoute exact path="/leads/:id" component={LeadShow}/>
          <ProtectedAppRoute exact path="/leads" component={Leads}/>
          <ProtectedAppRoute exact path="/contacts/new" component={ContactNew}/>
          <ProtectedAppRoute exact path="/contacts/:id" component={ContactShow}/>
          <ProtectedAppRoute exact path="/contacts" component={Contacts}/>
          <ProtectedAppRoute exact path="/projects/new" component={ProjectNew}/>
          <ProtectedAppRoute exact path="/projects/:id" component={ProjectShow}/>
          <ProtectedAppRoute exact path="/projects" component={Projects}/>
          <ProtectedAppRoute exact path="/users/current" component={User}/>
          <ProtectedAppRoute component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
