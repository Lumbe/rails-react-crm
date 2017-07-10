import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import {Row, Col, Form, FormGroup, FormControl, Button, Panel, Tabs, Tab, Table} from 'react-bootstrap'


class LeadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return { lead: {
      name: '',
      phone: '',
      email: ''
    }};
  }

  componentDidMount() {
    // this.props.actions.loadLeads();
    console.log(this.props.lead)
  }

  render() {
    const lead = this.props.lead || this.state.lead;
    return (
      <Col md={12} xs={12}>
        <Panel>
          <form>
            <Tabs defaultActiveKey={1} id="lead-tabs">
              <Tab eventKey={1} title="Контакты">
                <Row>
                  <Col md={4} xs={12}>
                    <Table responsive>
                      <tbody>
                          <tr>
                            <th>Имя</th>
                            <td>
                              <FormGroup controlId="formHorizontalName">
                                <FormControl bsSize="sm" type="text" placeholder="Имя или Имя и Отчество" value={lead.name} />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Телефон</th>
                            <td>
                              <FormGroup controlId="formHorizontalPhone">
                                <FormControl bsSize="sm" type="text" placeholder="+38(097)123-45-67" value={lead.phone} />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>e-mail</th>
                            <td>
                              <FormGroup controlId="formHorizontalEmail">
                                <FormControl bsSize="sm" type="email" placeholder="example@example.com" value={lead.email}/>
                              </FormGroup>
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
            </Tabs>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default LeadForm
