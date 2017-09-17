import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'

class LeadHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleEdit() {
    this.props.onEditClick();
  }

  render() {
    const title = this.props.title || 'Лиды';
    const description = this.props.description || 'Холодные контакты';
    const isIndex = this.props.isIndex || false;
    const isShow = this.props.isShow || false;
    const isEditing = this.props.isEditing || false;

    return (
      <PageHeader className="page-header-default">
        {title}<br/>
        <small>{description}</small>
        {isIndex &&
        <Link to="/leads/new">
          <Button bsStyle="success" className="pull-right" id="new-lead-button">
            Добавить лид
          </Button>
        </Link>
        }
        {isShow &&
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <Button bsStyle="danger" onClick={this.toggleEdit.bind(this)} id="destroy-lead-button">
              Удалить
            </Button>
          </ButtonGroup>>
          <ButtonGroup>
            <Button bsStyle="default" onClick={this.toggleEdit.bind(this)} id="edit-lead-button">
              {isEditing ? 'Отмена' : 'Редактировать'}
            </Button>
          </ButtonGroup>>
        </ButtonToolbar>
        }
      </PageHeader>
    )
  }
}

export default LeadHeader
