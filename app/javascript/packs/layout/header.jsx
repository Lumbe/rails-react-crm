import React from 'react'
import axios from 'axios'
import {Label} from 'react-bootstrap'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {app_name: ''};
  }

  componentDidMount() {
    // executes when component is mounted
    axios.get('/users.json')
      .then(function(response){
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
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
        <div className="header">
          Header for {this.state.app_name}!
        </div>
        <button onClick={this.changeAppName.bind(this)}>
          Change app name
        </button>
        <Label bsStyle="succes"}>{this.props.email}</Label>
      </div>
    );
  }
}

export default Header
