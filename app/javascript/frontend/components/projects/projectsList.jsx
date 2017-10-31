import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, ButtonToolbar, Pagination} from 'react-bootstrap'

class ProjectsList extends React.Component {

  handleSelect(event) {
    this.props.load({page: event});
  }

  render() {
    const projects = this.props.projects;
    const meta = this.props.meta;
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Проект</th>
              <th>Площадь</th>
              <th>Описание</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              return <tr key={project.id}>
                <td>
                  <Link to={'/projects/' + project.id}>
                    {project.title}
                  </Link>
                </td>
                <td>{project.area}</td>
                <td>{project.description}</td>
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
        <Pagination
          bsSize="medium"
          items={meta.total_pages}
          activePage={meta.current_page}
          onSelect={this.handleSelect.bind(this)} />
      </div>
    );
  }
}

export default ProjectsList;
