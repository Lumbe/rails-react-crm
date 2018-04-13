import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleEdit() {
    this.props.onEditClick();
  }

  render() {
    const title = this.props.title || 'Пользователи';
    const description = this.props.description || '';
    const isIndex = this.props.isIndex || false;
    const isShow = this.props.isShow || false;
    const isEditing = this.props.isEditing || false;

    return (
      <PageHeader className="page-header-default">
        {title}
        {' '}
        {description && <small>{description}</small>}
        {isIndex &&
        <Link to="users/new">
          <Button bsStyle="success" className="pull-right" id="new-user-button">
            Добавить пользователя
          </Button>
        </Link>
        }
        {isShow &&
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <Button bsStyle="default" onClick={this.toggleEdit.bind(this)} id="edit-user-button">
              {isEditing ? 'Отмена' : 'Редактировать'}
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button bsStyle="danger" onClick={this.props.handleDestroy} id="destroy-user-button">
              Удалить
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        }
      </PageHeader>
    )
  }
}

export default UserHeader
