import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleEdit() {
    this.props.onEditClick();
  }

  render() {
    const title = this.props.title || 'Проекты';
    const description = this.props.description || 'Проекты домов и коттеджей';
    const isIndex = this.props.isIndex || false;
    const isShow = this.props.isShow || false;
    const isEditing = this.props.isEditing || false;

    return (
      <PageHeader className="page-header-default">
        {title}<br/>
        <small>{description}</small>
        {isIndex &&
        <Link to="/projects/new">
          <Button bsStyle="success" className="pull-right" id="new-project-button">
            Добавить проект
          </Button>
        </Link>
        }
        {isShow &&
        <ButtonToolbar className="pull-right">
          <ButtonGroup>
            <Button bsStyle="default" onClick={this.toggleEdit.bind(this)} id="edit-project-button">
              {isEditing ? 'Отмена' : 'Редактировать'}
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button bsStyle="danger" onClick={this.props.handleDestroy} id="destroy-project-button">
              Удалить
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        }
      </PageHeader>
    )
  }
}

export default ProjectHeader
