import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Clearfix, PageHeader, Table, Button, ButtonToolbar, Panel} from 'react-bootstrap'

class HouseProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {};
  }

  componentDidMount() {
  }

  render() {
    const houseProjects = this.props.houseProjects || []
    console.log(this.props)
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Статус</th>
            <th>Проект</th>
            <th>Площадь</th>
            <th>Описание</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {houseProjects.map((houseProject) => {
            return <tr key={houseProject.id}>
              <td>статус</td>
              <td>
                <Link to={'/house-projects/' + houseProject.id}>
                  {houseProject.title}
                </Link>
              </td>
              <td>{houseProject.square}</td>
              <td>{houseProject.project_description}</td>
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
    );
  }
}

export default HouseProjectsIndex;
