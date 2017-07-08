import React from 'react';
import {Link} from 'react-router-dom';
import { PageHeader, Button} from 'react-bootstrap'


class LeadHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      name: 'Лиды',
      description: 'Холодные контакты'
    }
  }

  componentDidMount() {
    // if lead object exists && has a 'name' property update state 'name'
    // console.log(this.props)
    // if (Object.keys(this.props.lead).length && this.props.lead.name.length) {
    //   this.setState({name: this.props.lead.name,
    //                 description: 'лид'
    //   })
    // }
  }


  render() {
    return (
      <PageHeader className="page-header-default">
        {this.state.name}<br/>
        <small>{this.state.description}</small>
        <Button bsStyle="success" className="pull-right">Добавить лид</Button>
      </PageHeader>
  )}
}

export default LeadHeader
