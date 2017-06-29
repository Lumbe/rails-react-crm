import React from 'react';
import {Link} from 'react-router-dom'
import Routes from '../routes'

class Navigation extends React.Component {
  render() {
    return <div>
      <Link to="/">Home</Link>
      <Link to="/leads">Лиды</Link>

      <Routes/>
    </div>
  }
}

export default Navigation
