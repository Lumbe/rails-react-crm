import React from 'react';
import {Link} from 'react-router-dom';
import { PageHeader, Button} from 'react-bootstrap'


class LeadHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {isEditing: false};
  }

  componentDidMount() {
  }

  handleClick(e) {
    (e).preventDefault();
    console.log('clicked Edit!')
  }

  render() {
    const title = this.props.lead.name || 'Лиды'
    const description = this.props.description || 'Холодные контакты'
    return (
      <PageHeader className="page-header-default">
        {title}<br/>
        <small>{description}</small>
        <Link to="new">
          <Button bsStyle="success" className="pull-right" id="new-lead-button">
            Добавить лид
          </Button>
        </Link>
          <Button bsStyle="default" onClick={this.handleClick.bind(this)} className="pull-right" id="new-lead-button">
            Редактировать
          </Button>
      </PageHeader>
    )
  }
}

export default LeadHeader
