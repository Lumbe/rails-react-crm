import React from 'react';
import {Row, Col,Panel, Tabs, Tab, Table} from 'react-bootstrap'


export default function LeadDetail(props) {
  const user = props.user;
  return (
    <Col md={12} xs={12}>
      <Panel>
        <Panel.Body>
          <Tabs defaultActiveKey={1} id="user-tabs">
            <Tab eventKey={1} title="Контактная информация">
              <Row>
                <Col md={4} xs={12}>
                  <Table responsive>
                    <tbody>
                        <tr>
                          <th>Имя</th>
                          <td>
                            {user.first_name}
                          </td>
                        </tr>
                        <tr>
                          <th>телефон</th>
                          <td>{user.last_name}</td>
                        </tr>
                        <tr>
                          <th>email</th>
                          <td>{user.email}</td>
                        </tr>
                        <tr>
                          <th>Состоит в представительствах</th>
                          <td>
                            <ul>
                              {user.departments.map((department, index) => {
                                return <li key={index}>{department.name}</li>
                              })}
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th className="success">Админ</th>
                          <td>{user.admin ? 'Да' : 'Нет'}</td>
                        </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey={2} title="Подробная информация">
              <Row>
                <Col md={6} xs={12}>
                  <Table responsive bordered>
                    <tbody>
                      <tr>
                        <th className="success">id</th>
                        <td>{user.id}</td>
                      </tr>
                      <tr>
                        <th className="success">sign_in_count</th>
                        <td>{user.sign_in_count}</td>
                      </tr>
                      <tr>
                        <th className="success">current_sign_in_ip</th>
                        <td>{user.current_sign_in_ip}</td>
                      </tr>
                      <tr>
                        <th className="success">current_sign_in_ip</th>
                        <td>{user.last_sign_in_ip}</td>
                      </tr>
                      <tr>
                        <th className="success">access_token</th>
                        <td>{user.access_token}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Panel.Body>
      </Panel>
    </Col>
  );
}
