import React from 'react';
import {Link} from 'react-router-dom';
import { PageHeader, Button} from 'react-bootstrap'


class LeadHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleEdit() {
    this.props.onEditClick();
  }

  render() {
    const title = this.props.title || 'Лиды'
    const description = this.props.description || 'Холодные контакты'
    const isIndex = this.props.isIndex || false
    const isShow = this.props.isShow || false

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
              <div>
		<Button bsStyle="danger" onClick={this.toggleEdit.bind(this)} className="pull-right" id="destroy-lead-button">
                  Удалить
                </Button>
	        <Button bsStyle="default" onClick={this.toggleEdit.bind(this)} className="pull-right" id="edit-lead-button">
                  Редактировать
                </Button>
	      </div>
          }
          {/* {(this.props.isNew || this.props.isEditing) &&
              <Button bsStyle="default" onClick={this.handleClick.bind(this)} className="pull-right" id="new-lead-button">
                Сохранить
              </Button>
          } */}
        </PageHeader>
    )};
};

export default LeadHeader
