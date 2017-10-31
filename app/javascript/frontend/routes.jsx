import React from 'react'
import { Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/home'
import Leads from './components/leads/leads'
import LeadShow from './components/leads/leadShow'
import LeadNew from './components/leads/leadNew'
import User from './components/users/user'
import SignIn from './components/users/signIn'
import HouseProjects from './components/house_projects/houseProjects'
import NotFound from './components/errors/notFound'
import About from './components/pages/about'
import ProtectedAppRoute from './components/layout/protectedAppLayout'
import PublicAppRoute from './components/layout/publicAppLayout'
import ProjectNew from './components/projects/projectNew'
import ProjectShow from './components/projects/projectShow'
import Projects from './components/projects/projects'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicAppRoute exact path="/about" component={About}/>
          <ProtectedAppRoute exact path="/users/sign-in" component={SignIn}/>
          <ProtectedAppRoute exact path="/" component={Home}/>
          <ProtectedAppRoute exact path="/leads/new" component={LeadNew}/>
          <ProtectedAppRoute exact path="/leads/:id" component={LeadShow}/>
          <ProtectedAppRoute exact path="/leads" component={Leads}/>
          <ProtectedAppRoute exact path="/projects/new" component={ProjectNew}/>
          <ProtectedAppRoute exact path="/projects/:id" component={ProjectShow}/>
          <ProtectedAppRoute exact path="/projects" component={Projects}/>
          <ProtectedAppRoute exact path="/users/current" component={User}/>
          <ProtectedAppRoute exact path="/house-projects" component={HouseProjects}/>
          <ProtectedAppRoute component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
