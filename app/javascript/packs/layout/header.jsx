import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Label, Button} from 'react-bootstrap'
import Navigation from './navigation'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: '', users: []};
  }

  componentDidMount() {
    // executes when component is mounted
    var self = this;
    axios.get('users.json')
      .then(response => {
        self.setState({users: response.data});
      });
    this.setState({app_name: 'CRM'});
  }

  componentWillUnmount() {
    // executes when component is unmounted
  }

  changeAppName(e) {
    e.preventDefault();
    var newAppName = window.prompt("Введите новое название приложения", this.state.app_name);
    console.log(newAppName);
    this.setState({app_name: newAppName});
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className="header">
          Header for {this.state.app_name}!
        </div>

        <button onClick={this.changeAppName.bind(this)}>
          Change app name
        </button>

        <ul>
          {this.state.users.map((user) => {
            return <li key={user.id}>{user.email}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Header
