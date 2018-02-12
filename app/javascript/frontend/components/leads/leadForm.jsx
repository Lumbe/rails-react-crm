import React from 'react';
import {Row, Col, FormGroup, FormControl, Button, Panel, Tabs, Tab, Table,ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class LeadForm extends React.Component {
  render() {
    const {isSubmitting: isSubmitting} = this.props;
    return (
      <Col md={12} xs={12}>
        <Panel>
          <form>
            <fieldset disabled={isSubmitting}>
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
                                  <FormControl
                                    name="name"
                                    bsSize="sm"
                                    type="text"
                                    placeholder="Имя или Имя и Отчество"
                                    value={this.props.lead.name}
                                    onChange={this.props.onChange}
                                  />
                                </FormGroup>
                              </td>
                            </tr>
                            <tr>
                              <th>Телефон</th>
                              <td>
                                <FormGroup controlId="formHorizontalPhone">
                                  <FormControl
                                    name="phone"
                                    bsSize="sm"
                                    type="text"
                                    placeholder="+38(097)123-45-67"
                                    value={this.props.lead.phone}
                                    onChange={this.props.onChange}
                                  />
                                </FormGroup>
                              </td>
                            </tr>
                            <tr>
                              <th>e-mail</th>
                              <td>
                                <FormGroup controlId="formHorizontalEmail">
                                  <FormControl
                                    name="email"
                                    bsSize="sm"
                                    type="email"
                                    placeholder="example@example.com"
                                    value={this.props.lead.email}
                                    onChange={this.props.onChange}
                                  />
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
            </fieldset>
            <ButtonToolbar>
                <Button bsStyle="success" id="new-lead-button" onClick={this.props.onSave} disabled={isSubmitting}>
                  Сохранить {isSubmitting && <FontAwesomeIcon icon="spinner" spin/>}
                </Button>
                <Button onClick={this.props.onCancel}>
                  Отмена
                </Button>
            </ButtonToolbar>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default LeadForm
