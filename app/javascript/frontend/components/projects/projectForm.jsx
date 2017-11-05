import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectActions';
import {Row, Col, FormGroup, FormControl, Button, Image, Panel, Checkbox, Table,ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      project: {
        facades_attributes: []
      },
      isSubmittingForm: false
    }
  }

  updateProjectState(event) {
    const target = event.target;
    const field = event.target.name;
    const project = this.state.project;
    project[field] = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({project: project});
  }

  uploadFile(event) {
    const target = event.target;
    const field = event.target.name;
    const project = this.state.project;
    project[field] = target.files[0];
    return this.setState({project: project});
  }

  uploadMultipleFiles(event) {
    const target = event.target;
    const field = event.target.name;
    const project = this.state.project;

    let selectedFiles = target.files;
    project[field] = this.state.project.facades_attributes;
    for (let i = 0; i < selectedFiles.length; i++) {
      project[field].push(selectedFiles.item(i));
    }
    this.setState({project: project});
  }

  buildFormData() {
    let formData = new FormData();
    let project = this.state.project;
    for (let prop in project) {
      if (project.hasOwnProperty(prop)) {
        if (Array.isArray(project[prop])) {
          for (let i = 0; i < project[prop].length; i++) {
            let file = project[prop][i];
            formData.append(`project[${prop}][${i}][image]`, file);
          }
        } else {
          formData.append(`project[${prop}]`, project[prop])
        }
      }
    }
    return formData;
  }

  submitForm(event) {
    event.preventDefault();
    if (this.props.projectId) {
      this.setState({isSubmittingForm: true}, () => {
          this.props.actions.updateProject(this.props.projectId, this.buildFormData()).then(response => {
            this.props.toggleEdit(true)
          })
        }
      );
    } else {
      this.setState({isSubmittingForm: true}, () => {
        this.props.actions.createProject(this.buildFormData()).then(response => {
          this.props.history.push(response.data.project.id.toString())});
        }
      );
    }
  }

  render() {
    return (
      <Col md={12} xs={12}>
        <Panel>
          <form>
                <Row>
                  <Col md={12} xs={12}>
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
                                  value={this.state.project.title || this.props.project.title}
                                  onChange={this.updateProjectState.bind(this)}
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
                                  value={this.state.project.area || this.props.project.area}
                                  onChange={this.updateProjectState.bind(this)}
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
                                  value={this.state.project.description || this.props.project.description}
                                  onChange={this.updateProjectState.bind(this)}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Опции</th>
                            <td>
                              <FormGroup>
                                <Checkbox
                                  inline
                                  name="mansard"
                                  checked={this.state.project.mansard || this.props.project.mansard}
                                  onChange={this.updateProjectState.bind(this)}
                                >
                                  Мансарда
                                </Checkbox>
                                {' '}
                                <Checkbox
                                  inline
                                  name="terrace"
                                  checked={this.state.project.terrace || this.props.project.terrace}
                                  onChange={this.updateProjectState.bind(this)}
                                >
                                  Терраса
                                </Checkbox>
                                {' '}
                                <Checkbox
                                  inline
                                  name="garage"
                                  checked={this.state.project.garage || this.props.project.garage}
                                  onChange={this.updateProjectState.bind(this)}
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
                                {this.props.project.first_floor_plan &&
                                <div>
                                  <Image src={this.props.project.first_floor_plan.medium} responsive/>
                                  Имя файла: <b>{this.props.project.first_floor_plan.title}</b>
                                  <br/>
                                </div>
                                }
                                <FormControl
                                  name="first_floor_plan"
                                  type="file"
                                  onChange={this.uploadFile.bind(this)}
                                />
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
                                  value={this.state.project.first_floor_desc || this.props.project.first_floor_desc}
                                  onChange={this.updateProjectState.bind(this)}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>План 2-го этажа</th>
                            <td>
                              <FormGroup>
                                {this.props.project.second_floor_plan &&
                                <div>
                                  <Image src={this.props.project.second_floor_plan.medium} responsive/>
                                  Имя файла: <b>{this.props.project.second_floor_plan.title}</b>
                                  <br/>
                                </div>
                                }
                                <FormControl
                                  name="second_floor_plan"
                                  type="file"
                                  onChange={this.uploadFile.bind(this)}
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
                                  value={this.state.project.second_floor_desc || this.props.project.second_floor_desc}
                                  onChange={this.updateProjectState.bind(this)}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>3D-модель</th>
                            <td>
                              <FormGroup>
                                {this.props.project.model &&
                                  <div>
                                    <Image src={this.props.project.model.medium} responsive/>
                                    Имя файла: <b>{this.props.project.model.title}</b>
                                    <br/>
                                  </div>
                                }
                                <FormControl
                                  name="model"
                                  type="file"
                                  onChange={this.uploadFile.bind(this)}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Фасады</th>
                            <td>
                              <FormGroup>
                                {this.props.project.facades &&
                                  this.props.project.facades.map((facade, index) => {
                                    return <div key={index} className="facade-img">
                                      <Image src={facade.medium}/>
                                      <div>Имя файла: <b>{facade.title}</b></div>
                                    </div>
                                  })
                                }
                                <FormControl
                                  name="facades_attributes"
                                  type="file"
                                  multiple={true}
                                  onChange={this.uploadMultipleFiles.bind(this)}
                                />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <th>Фото построенного дома</th>
                            <td>
                              <FormGroup>
                                {this.props.project.photo &&
                                  <div>
                                    <Image src={this.props.project.photo.medium} responsive/>
                                    Имя файла: <b>{this.props.project.photo.title}</b>
                                    <br/>
                                  </div>
                                }
                                <FormControl
                                  name="photo"
                                  type="file"
                                  onChange={this.uploadFile.bind(this)}
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
                <Button
                  bsStyle="success"
                  id="new-lead-button"
                  disabled={this.state.isSubmittingForm}
                  onClick={this.submitForm.bind(this)}
                >
                  {this.state.isSubmittingForm ? "Сохраняем..." : "Сохранить"}
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  disabled={this.state.isSubmittingForm}
                  onClick={this.props.cancel}
                >
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ProjectForm));
