import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Row, Col, Button, Panel, Tabs, Tab, Table,ButtonToolbar, Form, FormGroup} from 'react-bootstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Field, reduxForm } from 'redux-form'
import {renderTextField, renderSelectFieldComponent, renderHorizontalCheckbox} from '../../common/reduxFormFields'

class UserForm extends React.Component {
  formatDepartments(departments) {
    return departments.map((department) => {
      return {key: department.name, value: department.id}
    });
  }

  formatArrayOfStrings(array) {
    return array.map((string) => {
      return {key: string, value: string}
    })
  }

  render() {
    const {user, availableDepartments, handleSubmit, submitting} = this.props;
    // const departments = this.formatDepartments(availableDepartments);
    return (
      <Col md={12} xs={12}>
        <Panel>
          <Panel.Body>
            <Form onSubmit={handleSubmit(this.props.handleFormSubmit)}>
              <fieldset disabled={submitting}>
                <Tabs defaultActiveKey={1} id="user-tabs">
                  <Tab eventKey={1} title="Контакты">
                    <Row>
                      <Col md={6} xs={12}>
                        <Table responsive={true}>
                          <tbody>
                            <Field
                              component={renderTextField}
                              name="first_name"
                              type="text"
                              label="Имя"
                            />
                            <Field
                              component={renderTextField}
                              name="last_name"
                              type="text"
                              label="Фамилия"
                            />
                            <Field
                              component={renderTextField}
                              name="email"
                              type="text"
                              label="email"
                            />
                            <Field
                              component={renderTextField}
                              name="password"
                              type="password"
                              label="Пароль"
                            />
                            {/* TODO: fetch departments and pass collection here, multiselect*/}
                            {/*<Field*/}
                              {/*component={renderSelectFieldComponent}*/}
                              {/*name="department"*/}
                              {/*label="Добавить в"*/}
                              {/*optionsForSelect={departments}*/}
                            {/*/>*/}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey={2} title="Подробная информация">
                    {/*<Row>*/}
                      {/*<Col md={6} xs={12}>*/}
                        {/*<Table responsive bordered>*/}
                          {/*<tbody>*/}
                            {/*<Field*/}
                              {/*component={renderTextField}*/}
                              {/*name="project"*/}
                              {/*type="text"*/}
                              {/*label="Проект"*/}
                            {/*/>*/}
                            {/*<Field*/}
                              {/*component={renderTextField}*/}
                              {/*name="square"*/}
                              {/*type="text"*/}
                              {/*label="Площадь"*/}
                            {/*/>*/}
                            {/*<Field*/}
                              {/*component={renderSelectFieldComponent}*/}
                              {/*name="floor"*/}
                              {/*label="Этажность"*/}
                              {/*optionsForSelect={[{key: "1 этаж", value: "1"}, {key: "2 этажа", value: "2"}]}*/}
                            {/*/>*/}
                          {/*</tbody>*/}
                        {/*</Table>*/}
                      {/*</Col>*/}
                      {/*<Col md={6} xs={12}>*/}
                        {/*<Table responsive bordered>*/}
                          {/*<tbody>*/}
                          {/*<tr>*/}
                            {/*<th>Как вышел на связь</th>*/}
                            {/*<td>*/}
                              {/*<FormGroup>*/}
                                {/*<Field*/}
                                  {/*component={renderHorizontalCheckbox}*/}
                                  {/*name="online_request"*/}
                                  {/*label="Запрос"*/}
                                {/*/>*/}
                                {/*<Field*/}
                                  {/*component={renderHorizontalCheckbox}*/}
                                  {/*name="phone_call"*/}
                                  {/*label="Звонок"*/}
                                {/*/>*/}
                                {/*<Field*/}
                                  {/*component={renderHorizontalCheckbox}*/}
                                  {/*name="come_in_office"*/}
                                  {/*label="Пришел в офис"*/}
                                {/*/>*/}
                              {/*</FormGroup>*/}
                            {/*</td>*/}
                          {/*</tr>*/}
                          {/*<Field*/}
                            {/*component={renderSelectFieldComponent}*/}
                            {/*name="source"*/}
                            {/*label="Откуда узнал"*/}
                            {/*optionsForSelect={sources}*/}
                          {/*/>*/}
                          {/*<Field*/}
                            {/*component={renderTextField}*/}
                            {/*name="location"*/}
                            {/*type="text"*/}
                            {/*label="Место строительства"*/}
                          {/*/>*/}
                          {/*<Field*/}
                            {/*component={renderSelectFieldComponent}*/}
                            {/*name="region"*/}
                            {/*label="Регион"*/}
                            {/*optionsForSelect={regions}*/}
                          {/*/>*/}
                          {/*</tbody>*/}
                        {/*</Table>*/}
                      {/*</Col>*/}
                    {/*</Row>*/}
                  </Tab>
                </Tabs>
              </fieldset>
              <ButtonToolbar>
                  <Button bsStyle="success" id="new-user-button" type="submit" disabled={submitting}>
                    Сохранить {submitting && <FontAwesomeIcon icon="spinner" spin/>}
                  </Button>
                  <Button onClick={this.props.onCancel}>
                    Отмена
                  </Button>
              </ButtonToolbar>
            </Form>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let user = ownProps.user;
  return {
    initialValues: user
  };
}

UserForm = reduxForm({form: 'user'})(UserForm);
export default withRouter(connect(mapStateToProps, null)(UserForm));
