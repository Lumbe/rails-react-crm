import React from 'react';
import {Row, Col, Panel, Table} from 'react-bootstrap'


export default function ProjectDetail(props) {
  const project = props.project
  return (
    <Col md={12} xs={12}>
      <Panel>
        <Row>
          <Col md={4} xs={12}>
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
              </tbody>
            </Table>
          </Col>
        </Row>
      </Panel>
    </Col>
  );
}
