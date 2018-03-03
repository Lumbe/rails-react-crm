import React from 'react';
import {Row, Col,Panel, Tabs, Tab, Table} from 'react-bootstrap'


export default function LeadDetail(props) {
  const lead = props.lead;
  return (
    <Col md={12} xs={12}>
      <Panel>
        <Tabs defaultActiveKey={1} id="lead-tabs">
        <Tab eventKey={1} title="Контактная информация">
          <Row>
            <Col md={4} xs={12}>
              <Table responsive>
                <tbody>
                    <tr>
                      <th>Имя</th>
                      <td>
                        {lead.name}
                      </td>
                    </tr>
                    <tr>
                      <th>телефон</th>
                      <td>{lead.phone}</td>
                    </tr>
                    <tr>
                      <th>email</th>
                      <td>{lead.email}</td>
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
                      <th className="success">Сообщение клиента</th>
                      <td>{lead.question}</td>
                    </tr>
                    <tr>
                      <th className="success">Проект</th>
                      <td>{lead.project}</td>
                    </tr>
                    <tr>
                      <th className="success">Площадь(кв.м.)</th>
                      <td>{lead.square}</td>
                    </tr>
                    <tr>
                      <th className="success">Этажность</th>
                      <td>{lead.floor}</td>
                    </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6} xs={12}>
              <Table responsive bordered>
                <tbody>
                    <tr>
                      <th className="success">Как вышел на связь</th>
                      <td>
                        <ul>
                          {lead.phone_call && <li> Звонок</li>}
                          {lead.online_request && <li>Запрос</li>}
                          {lead.come_in_office && <li>Пришел в офис</li>}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="success">Откуда узнал</th>
                      <td>{lead.source}</td>
                    </tr>
                    <tr>
                      <th className="success">Место строительства</th>
                      <td>{lead.location}</td>
                    </tr>
                    <tr>
                      <th className="success">Регион</th>
                      <td>{lead.region}</td>
                    </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey={3} title="Связанные контакты">В разработке</Tab>
      </Tabs>
      </Panel>
    </Col>
  );
}
