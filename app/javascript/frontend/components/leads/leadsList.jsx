import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, ButtonToolbar, Pagination} from 'react-bootstrap'

class LeadsList extends React.Component {

  handleSelect(event) {
    this.props.load({page: event});
  }

  render() {
    const leads = this.props.leads;
    const meta = this.props.meta;
    return (
      <div>
        {(leads.length > 1) ?
          <Table responsive>
            <thead>
            <tr>
              <th>Статус</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Представительство</th>
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
                <td>{lead.departmentName}</td>
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
          :
          <div className="text-center">Ничего не найдено</div>
        }
        {(meta.total_pages > 1) && <Pagination
          bsSize="medium"
          items={meta.total_pages}
          activePage={meta.current_page}
          onSelect={this.handleSelect.bind(this)}/>}
      </div>
    );
  }
}

export default LeadsList;
