import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Row, Col, Button, Panel, Tabs, Tab, Table,ButtonToolbar, Form} from 'react-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Field, reduxForm } from 'redux-form'
import {renderTextField, renderSelectFieldComponent} from '../common/reduxFormFields'

class LeadForm extends React.Component {
  render() {
    const {lead, availableDepartments, handleSubmit, submitting} = this.props;
    console.log('lead', lead);
    return (
      <Col md={12} xs={12}>
        <Panel>
          <Form onSubmit={handleSubmit(this.props.handleFormSubmit)}>
            <fieldset disabled={submitting}>
              <Tabs defaultActiveKey={1} id="lead-tabs">
                <Tab eventKey={1} title="Контакты">
                  <Row>
                    <Col md={6} xs={12}>
                      <Table responsive={true}>
                        <tbody>
                          <Field
                            component={renderTextField}
                            name="name"
                            type="text"
                            label="Имя"
                          />
                          <Field
                            component={renderTextField}
                            name="phone"
                            type="text"
                            label="Телефон"
                          />
                          <Field
                            component={renderTextField}
                            name="email"
                            type="text"
                            label="email"
                          />
                          <Field
                            component={renderSelectFieldComponent}
                            name="department"
                            label="Добавить в"
                            optionsForSelect={availableDepartments}
                          />
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
                <Button bsStyle="success" id="new-lead-button" type="submit" disabled={submitting}>
                  Сохранить {submitting && <FontAwesomeIcon icon="spinner" spin/>}
                </Button>
                <Button onClick={this.props.onCancel}>
                  Отмена
                </Button>
            </ButtonToolbar>
          </Form>
        </Panel>
      </Col>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let lead = ownProps.lead;
  return {
    initialValues: lead
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  }
}
LeadForm = reduxForm({form: 'lead'})(LeadForm);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeadForm));
