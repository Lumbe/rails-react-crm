import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, ButtonToolbar, Pagination} from 'react-bootstrap'

class LeadsList extends React.Component {

  handleSelect(event) {
    this.props.load({page: event});
    console.log('event', event)
  }

  render() {
    const leads = this.props.leads;
    const meta = this.props.meta;
    return (
      <div>
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
        <Pagination
          bsSize="medium"
          items={meta.total_pages}
          activePage={meta.current_page}
          onSelect={this.handleSelect.bind(this)} />
      </div>
    );
  }
}

export default LeadsList;
