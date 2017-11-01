import React from 'react';
import {Row, Col, FormGroup, FormControl, Button, Panel, Checkbox, Table,ButtonToolbar, ButtonGroup} from 'react-bootstrap'


class ProjectForm extends React.Component {
  render() {
    return (
      <Col md={12} xs={12}>
        <Panel>
          <form encType="multipart/form-data">
                <Row>
                  <Col md={4} xs={12}>
                    <Table responsive>
                      <tbody>
                          <tr>
                            <th>Проект</th>
                            <td>
                              <FormGroup controlId="formHorizontalName">
                                <FormControl
                                  name="title"
                                  bsSize="sm"
                                  type="text"
                                  placeholder="Гнап"
                                  value={this.props.project.title}
                                  onChange={this.props.onChange}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Площадь</th>
                            <td>
                              <FormGroup controlId="formHorizontalPhone">
                                <FormControl
                                  name="area"
                                  bsSize="sm"
                                  type="text"
                                  placeholder="125.47"
                                  value={this.props.project.area}
                                  onChange={this.props.onChange}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Описание</th>
                            <td>
                              <FormGroup controlId="formHorizontalEmail">
                                <FormControl
                                  name="description"
                                  bsSize="sm"
                                  componentClass="textarea"
                                  placeholder="Несколько предложений о проекте"
                                  value={this.props.project.description}
                                  onChange={this.props.onChange}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Мансарда</th>
                            <td>
                              <FormGroup>
                                <Checkbox
                                  inline
                                  name="mansard"
                                  checked={this.props.project.mansard}
                                  onChange={this.props.onChange}
                                >
                                  Мансарда
                                </Checkbox>
                                {' '}
                                <Checkbox
                                  inline
                                  name="terrace"
                                  checked={this.props.project.terrace}
                                  onChange={this.props.onChange}
                                >
                                  Терраса
                                </Checkbox>
                                {' '}
                                <Checkbox
                                  inline
                                  name="garage"
                                  checked={this.props.project.garage}
                                  onChange={this.props.onChange}
                                >
                                  Гараж
                                </Checkbox>
                              </FormGroup>

                            </td>
                          </tr>
                          <tr>
                            <th>План 1-го этажа</th>
                            <td>
                              <FormGroup>
                                <FormControl
                                  name="first_floor_desc"
                                  bsSize="sm"
                                  componentClass="textarea"
                                  placeholder="Несколько предложений о проекте"
                                  value={this.props.project.first_floor_desc}
                                  onChange={this.props.onChange}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>План 2-го этажа</th>
                            <td>
                              <FormGroup>
                                <FormControl
                                  name="second_floor_desc"
                                  bsSize="sm"
                                  componentClass="textarea"
                                  placeholder="Каждый пункт с новой строки"
                                  value={this.props.project.second_floor_desc}
                                  onChange={this.props.onChange}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>3D-модель</th>
                            <td>
                              <FormGroup>
                                <FormControl
                                  name="model"
                                  type="file"
                                  onChange={this.props.uploadFile}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
            <ButtonToolbar>
              <ButtonGroup>
                <Button bsStyle="success" id="new-lead-button" onClick={this.props.onSave}>
                  Сохранить
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button onClick={this.props.onCancel}>
                  Отмена
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default ProjectForm
