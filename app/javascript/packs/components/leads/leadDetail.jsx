import React from 'react';
import {Grid, Row, Col, Clearfix, PageHeader, Button, Panel, Tabs, Tab, Table} from 'react-bootstrap'


export default function LeadDetail(props) {
  const lead = props.lead
  return (
    <Col md={12} xs={12}>
      <Panel>
        {/* <Button bsStyle="link" className="pull-right">Редактировать</Button> */}
        <Tabs defaultActiveKey={1} id="lead-tabs">
        <Tab eventKey={1} title="Контакты">
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
                      <td>бла бла бла</td>
                    </tr>
                    <tr>
                      <th className="success">Проект</th>
                      <td>Амалия</td>
                    </tr>
                    <tr>
                      <th className="success">Площадь(кв.м.)</th>
                      <td>138.68</td>
                    </tr>
                    <tr>
                      <th className="success">Этажность</th>
                      <td>2</td>
                    </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6} xs={12}>
              <Table responsive bordered>
                <tbody>
                    <tr>
                      <th className="success">Как вышел на связь</th>
                      <td>Запрос</td>
                    </tr>
                    <tr>
                      <th className="success">Откуда узнал</th>
                      <td>Интернет</td>
                    </tr>
                    <tr>
                      <th className="success">Место строительства</th>
                      <td>Хмельницкий</td>
                    </tr>
                    <tr>
                      <th className="success">Регион</th>
                      <td>Хмельницкая обл.</td>
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
