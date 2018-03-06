import React from 'react';
import {Link} from 'react-router-dom';
import {Table, ButtonToolbar, Dropdown, MenuItem, DropdownButton} from 'react-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Pagination from '../common/pagination'

class LeadsList extends React.Component {

  handleSelect(event) {
    this.props.load({page: event});
  }

  render() {
    const leads = this.props.leads;
    const meta = this.props.meta;
    return (
      <div>
        {leads ?
          <Table responsive>
            <thead>
            <tr>
              <th>Статус</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Место строительтсва</th>
              <th>Представительство</th>
              <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {leads.map((lead) => {
              return <tr key={lead.id}>
                <td>
                  <ButtonToolbar>
                    <DropdownButton
                      bsSize="xsmall"
                      bsStyle="danger"
                      title={lead.status}
                      id="lead-status"
                    >
                      {lead.statuses.filter((status) => {return status !== lead.status}).map((status, index) => {
                        return <MenuItem eventKey={{status, id: lead.id}} key={index} onSelect={this.props.handleStatusChange}>{status}</MenuItem>
                      })}
                    </DropdownButton>
                  </ButtonToolbar>
                </td>
                <td>
                  <Link to={'/leads/' + lead.id}>
                    {lead.name}
                  </Link>
                </td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.location}</td>
                <td>{lead.department && lead.department.name}</td>
                <td>
                  <ButtonToolbar>
                    <Dropdown
                      id="lead-actions"
                      pullRight
                      bsSize="small"
                    >
                      <Dropdown.Toggle>
                        <FontAwesomeIcon icon="bars"/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <MenuItem eventKey="1">
                          <FontAwesomeIcon icon="sync-alt"/>
                          {' '}
                          Конвертировать
                        </MenuItem>
                        <MenuItem eventKey="2">
                          <FontAwesomeIcon icon="times"/>
                          {' '}
                          Закрыть
                        </MenuItem>
                        <MenuItem eventKey="3">
                          <FontAwesomeIcon icon="angle-double-right"/>
                          {' '}
                          Передать
                        </MenuItem>
                        <MenuItem eventKey="4">
                          <FontAwesomeIcon icon="envelope"/>
                          {' '}
                          Отправить почтой
                        </MenuItem>
                      </Dropdown.Menu>
                    </Dropdown>
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
          totalPages={meta.total_pages}
          currentPage={meta.current_page}
          onChange={this.handleSelect.bind(this)}/>}
      </div>
    );
  }
}

export default LeadsList;
