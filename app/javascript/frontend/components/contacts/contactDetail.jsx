import React from 'react';
import {Row, Col,Panel, Tabs, Tab, Table, Label} from 'react-bootstrap'


export default function ContactDetail(props) {
  const contact = props.contact;
  return (
    <Col md={12} xs={12}>
      <Panel>
        <Tabs defaultActiveKey={1} id="contact-tabs">
        <Tab eventKey={1} title="Контактная информация">
          <Row>
            <Col md={4} xs={12}>
              <Table responsive>
                <tbody>
                    <tr>
                      <th>Имя</th>
                      <td>
                        {contact.name}
                      </td>
                    </tr>
                    <tr>
                      <th>телефон</th>
                      <td>
                        {contact.phone}
                        {' '}
                        {contact.do_not_call && <Label bsStyle="danger" className="text-uppercase">Не звонить</Label>}
                      </td>
                    </tr>
                    <tr>
                      <th>email</th>
                      <td>
                        {contact.email}
                        {' '}
                        {contact.do_not_call && <Label bsStyle="danger" className="text-uppercase">Не писать</Label>}
                      </td>
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
                      <td>{contact.question}</td>
                    </tr>
                    <tr>
                      <th className="success">Проект</th>
                      <td>{contact.project}</td>
                    </tr>
                    <tr>
                      <th className="success">Площадь(кв.м.)</th>
                      <td>{contact.square}</td>
                    </tr>
                    <tr>
                      <th className="success">Этажность</th>
                      <td>{contact.floor}</td>
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
                          {contact.phone_call && <li> Звонок</li>}
                          {contact.online_request && <li>Запрос</li>}
                          {contact.come_in_office && <li>Пришел в офис</li>}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="success">Откуда узнал</th>
                      <td>{contact.source}</td>
                    </tr>
                    <tr>
                      <th className="success">Место строительства</th>
                      <td>{contact.location}</td>
                    </tr>
                    <tr>
                      <th className="success">Регион</th>
                      <td>{contact.region}</td>
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
