import React from 'react';
import {Row, Col, Panel, Table, Image} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

class ProjectDetail extends React.Component {

  render() {
    const project = this.props.project || {medium: null};
    return (
      <Col md={12} xs={12}>
        <Panel>
          <Row>
            <Col md={12} xs={12}>
              <Table responsive>
                <tbody>
                <tr>
                  <th>Проект</th>
                  <td>
                    {project.title}
                  </td>
                </tr>
                <tr>
                  <th>Площадь</th>
                  <td>{project.area}</td>
                </tr>
                <tr>
                  <th>Описание</th>
                  <td>{project.description}</td>
                </tr>
                <tr>
                  <th>Мансарда</th>
                  <td>{project.mansard ? "Есть" : 'Нету'}</td>
                </tr>
                <tr>
                  <th>Терраса</th>
                  <td>{project.terrace ? "Есть" : 'Нету'}</td>
                </tr>
                <tr>
                  <th>Гараж</th>
                  <td>{project.garage ? "Есть" : 'Нету'}</td>
                </tr>
                <tr>
                  <th>План 1-го этажа</th>
                  <td>{project.first_floor_desc}</td>
                </tr>
                <tr>
                  <th>План 2-го этажа</th>
                  <td>{project.second_floor_desc}</td>
                </tr>
                <tr>
                  <th>3D-модель</th>
                  <td>
                    {project.model && 
                      <div><Image src={project.model.medium} responsive/>
                      Имя файла: <b>{project.model.title}</b></div>
                    }
                  </td>
                </tr>
                <tr>
                  <th>Фасады</th>
                  <td>
                    {project.facades && project.facades.map((facade, index) => {
                      return <div key={index} className="facade-img">
                        <Image src={facade.medium}/>
                        <div>Имя файла: {facade.title}</div>
                      </div>
                    })}
                  </td>
                </tr>
                <tr>
                  <th>Фото построенного дома</th>
                  <td>
                    {project.photo &&
                      <div>
                        <Image src={project.photo.medium} responsive/>
                        {project.photo.title && <span>Имя файла: <b>{project.photo.title}</b></span>}
                      </div>
                    }
                  </td>
                </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Panel>
      </Col>
    );
  }
}

export default withRouter(ProjectDetail)