import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
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
      <header>
        <Navigation/>
      </header>
    );
  }
}

export default Header
