import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, ButtonToolbar} from 'react-bootstrap'
import Pagination from '../common/pagination'

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
                  <Link to={'/projects/' + project.slug}>
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
          totalPages={meta.total_pages}
          currentPage={meta.current_page}
          onChange={this.handleSelect.bind(this)}/>
      </div>
    );
  }
}

export default ProjectsList;
