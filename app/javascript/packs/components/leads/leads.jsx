import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'

class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {leads: []};
  }

  componentDidMount() {
    // executes when component is mounted
    var self = this;
    axios.get('api/v1/leads')
      .then(response => {
        self.setState({leads: response.data});
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.leads.map((lead) => {
            return <li key={lead.id}>{lead.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Leads
