import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {users: []};
  }

  componentDidMount() {
    // executes when component is mounted
    var self = this;
    axios.get('users.json')
      .then(response => {
        self.setState({users: response.data});
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => {
            return <li key={user.id}>{user.email}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Users
