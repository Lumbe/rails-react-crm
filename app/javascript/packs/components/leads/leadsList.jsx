import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, ButtonToolbar} from 'react-bootstrap'

class LeadsList extends React.Component {

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

export default LeadsList;
