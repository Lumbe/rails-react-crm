import React from 'react';
import {Link} from 'react-router-dom';
import {Table, ButtonToolbar, Pagination, Dropdown, MenuItem, DropdownButton, Tooltip, OverlayTrigger} from 'react-bootstrap'

class ContactsList extends React.Component {

  handleSelect(event) {
    this.props.load({page: event});
  }

  render() {
    const tooltipPhone = (
      <Tooltip id="phone-tooltip" className="text-uppercase">
        <strong>Не звонить</strong>
      </Tooltip>
    );
    const tooltipEmail = (
      <Tooltip id="email-tooltip" className="text-uppercase">
        <strong>Не писать</strong>
      </Tooltip>
    );
    const contacts = this.props.contacts;
    const meta = this.props.meta;
    return (
      <div>
        {contacts ?
          <Table responsive>
            <thead>
            <tr>
              <th>Статус</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Регион</th>
              <th>Представительство</th>
              {/*<th>Действия</th>*/}
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => {
              return <tr key={contact.id}>
                <td>
                  <ButtonToolbar>
                    <DropdownButton
                      bsSize="xsmall"
                      bsStyle="danger"
                      title={contact.status}
                      id="contact-status"
                    >
                      {contact.statuses && contact.statuses.filter((status) => {return status !== contact.status}).map((status, index) => {
                        return <MenuItem eventKey={{status, id: contact.id}} key={index} onSelect={this.props.handleStatusChange}>{status}</MenuItem>
                      })}
                    </DropdownButton>
                  </ButtonToolbar>
                </td>
                <td>
                  <Link to={'/contacts/' + contact.id}>
                    {contact.name}
                  </Link>
                </td>
                <td>
                  {contact.do_not_call ?
                    <OverlayTrigger placement="top" overlay={tooltipPhone}>
                      <span className="text-danger"><strong>{contact.phone}</strong></span>
                    </OverlayTrigger>
                    :
                    contact.phone
                  }
                </td>
                <td>
                  {contact.do_not_call ?
                    <OverlayTrigger placement="top" overlay={tooltipEmail}>
                      <span className="text-danger"><strong>{contact.email}</strong></span>
                    </OverlayTrigger>
                    :
                    contact.email
                  }
                </td>
                <td>{contact.region}</td>
                <td>{contact.department && contact.department.name}</td>
                {/*<td>*/}
                  {/*<ButtonToolbar>*/}
                    {/*<Dropdown*/}
                      {/*id="contact-actions"*/}
                      {/*pullRight*/}
                      {/*bsSize="small"*/}
                    {/*>*/}
                      {/*<Dropdown.Toggle>*/}
                        {/*<FontAwesomeIcon icon="bars"/>*/}
                      {/*</Dropdown.Toggle>*/}
                      {/*<Dropdown.Menu>*/}
                        {/*<MenuItem eventKey="1">*/}
                          {/*<FontAwesomeIcon icon="sync-alt"/>*/}
                          {/*{' '}*/}
                          {/*Конвертировать*/}
                        {/*</MenuItem>*/}
                        {/*<MenuItem eventKey="2">*/}
                          {/*<FontAwesomeIcon icon="times"/>*/}
                          {/*{' '}*/}
                          {/*Закрыть*/}
                        {/*</MenuItem>*/}
                        {/*<MenuItem eventKey="3">*/}
                          {/*<FontAwesomeIcon icon="angle-double-right"/>*/}
                          {/*{' '}*/}
                          {/*Передать*/}
                        {/*</MenuItem>*/}
                        {/*<MenuItem eventKey="4">*/}
                          {/*<FontAwesomeIcon icon="envelope"/>*/}
                          {/*{' '}*/}
                          {/*Отправить почтой*/}
                        {/*</MenuItem>*/}
                      {/*</Dropdown.Menu>*/}
                    {/*</Dropdown>*/}
                  {/*</ButtonToolbar>*/}
                {/*</td>*/}
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

export default ContactsList;
