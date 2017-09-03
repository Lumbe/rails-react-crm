import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Clearfix, PageHeader, Table, Button, ButtonToolbar, Panel} from 'react-bootstrap'

class LeadsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {};
  }

  componentDidMount() {
  }

  render() {
    const leads = this.props.leads
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Статус</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>E-mail</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => {
            return <tr key={lead.id}>
              <td>статус</td>
              <td>
                <Link to={'/leads/' + lead.id}>
                  {lead.name}
                </Link>
              </td>
              <td>{lead.phone}</td>
              <td>{lead.email}</td>
              <td>
                <ButtonToolbar>
                  <Button>edit</Button>
                  <Button bsStyle="danger">delete</Button>
                </ButtonToolbar>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    );
  }
}

export default LeadsIndex;
