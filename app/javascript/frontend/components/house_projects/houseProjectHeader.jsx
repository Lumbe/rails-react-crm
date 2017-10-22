import React from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Button} from 'react-bootstrap'


class HouseProjectHeader extends React.Component {
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
    const title = this.props.title || 'Проекты домов'
    const description = this.props.description || 'Площадь, планировка и 3D-визуализация проектов'
    return (
      <PageHeader className="page-header-default">
        {title}<br/>
        <small>{description}</small>
        <Link to="/house-projects/new">
          <Button bsStyle="success" className="pull-right" id="new-house-project-button">
            Добавить проект
          </Button>
        </Link>
          <Button bsStyle="default" onClick={this.handleClick.bind(this)} className="pull-right" id="edit-house-project-button">
            Редактировать
          </Button>
      </PageHeader>
    )
  }
}

export default HouseProjectHeader
