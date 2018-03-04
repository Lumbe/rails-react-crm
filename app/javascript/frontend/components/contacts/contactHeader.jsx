import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Button, ButtonToolbar, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

class ContactHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleEdit() {
    this.props.onEditClick();
  }

  render() {
    const title = this.props.title || 'Контакты';
    const description = this.props.description || null;
    const isIndex = this.props.isIndex || false;
    const isShow = this.props.isShow || false;
    const isEditing = this.props.isEditing || false;
    const contact = this.props.contact;

    return (
      <PageHeader className="page-header-default">
        {title}
        <br/>
        <small>Статус:</small>
        {' '}
        {contact && <ButtonToolbar style={{display: 'inline-block'}}>
          <DropdownButton
            bsSize="xsmall"
            bsStyle="danger"
            title={contact.status}
            id="contact-status"
          >
            {contact.statuses && contact.statuses.filter((status) => {
              return status !== contact.status
            }).map((status, index) => {
              return <MenuItem eventKey={{status, id: contact.id}} key={index}
                               onSelect={this.props.handleStatusChange}>{status}</MenuItem>
            })}
          </DropdownButton>
        </ButtonToolbar>}
        {isIndex &&
        <Link to="/contacts/new">
          <Button bsStyle="success" className="pull-right" id="new-contact-button">
            Добавить контакт
          </Button>
        </Link>}
        {isShow &&
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <Button bsStyle="default" onClick={this.toggleEdit.bind(this)} id="edit-contact-button">
              {isEditing ? 'Отмена' : 'Редактировать'}
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button bsStyle="danger" onClick={this.props.handleDestroy} id="destroy-contact-button">
              Удалить
            </Button>
          </ButtonGroup>
        </ButtonToolbar>}
      </PageHeader>
    )
  }
}

export default ContactHeader
