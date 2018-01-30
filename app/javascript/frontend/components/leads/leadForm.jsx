import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Row, Col, Form, FormGroup, FormControl, Button, Panel, Tabs, Tab, Table,ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form'
import {renderTextField} from '../common/reduxFormFields'
import * as leadActions from '../../actions/reduxApiMiddlware';

class LeadForm extends React.Component {

  render() {
    console.log('lead form props', this.props);
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Col md={12} xs={12}>
        <Panel>
          <Form horizontal onSubmit={handleSubmit(this.props.submitForm)}>
            <Tabs defaultActiveKey={1} id="lead-tabs">
              <Tab eventKey={1} title="Контакты">
                <Row>
                  <Col md={6} xs={12}>
                    <Row>
                      <Col md={12}>
                        <Field
                          component={renderTextField}
                          name="name"
                          type="text"
                          label="Имя"
                          // defaultValue={this.props.lead.name}
                          // onChange={this.props.onChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Field
                          component={renderTextField}
                          name="phone"
                          type="text"
                          label="Телефон"
                          // defaultValue={this.props.lead.name}
                          // onChange={this.props.onChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Field
                          component={renderTextField}
                          name="email"
                          type="email"
                          label="email"
                          // defaultValue={this.props.lead.name}
                          // onChange={this.props.onChange}
                        />
                      </Col>
                    </Row>
                    {/*<Col md={12}><Table responsive>*/}
                      {/*<tbody>*/}
                          {/*<tr>*/}
                            {/*<th>Телефон</th>*/}
                            {/*<td>*/}
                              {/*<FormGroup controlId="formHorizontalPhone">*/}
                                {/*<FormControl*/}
                                  {/*name="phone"*/}
                                  {/*bsSize="sm"*/}
                                  {/*type="text"*/}
                                  {/*placeholder="+38(097)123-45-67"*/}
                                  {/*value={this.props.lead.phone}*/}
                                  {/*onChange={this.props.onChange}*/}
                                {/*/>*/}
                              {/*</FormGroup>*/}
                            {/*</td>*/}
                          {/*</tr>*/}
                          {/*<tr>*/}
                            {/*<th>e-mail</th>*/}
                            {/*<td>*/}
                              {/*<FormGroup controlId="formHorizontalEmail">*/}
                                {/*<FormControl*/}
                                  {/*name="email"*/}
                                  {/*bsSize="sm"*/}
                                  {/*type="email"*/}
                                  {/*placeholder="example@example.com"*/}
                                  {/*value={this.props.lead.email}*/}
                                  {/*onChange={this.props.onChange}*/}
                                {/*/>*/}
                              {/*</FormGroup>*/}
                            {/*</td>*/}
                          {/*</tr>*/}
                      {/*</tbody>*/}
                    {/*</Table></Col>*/}
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
            <ButtonToolbar>
              <ButtonGroup>
                <Button bsStyle="success" id="new-lead-button" type="submit">
                  Сохранить
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button onClick={this.props.onCancel}>
                  Отмена
                </Button>
              </ButtonGroup>
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
