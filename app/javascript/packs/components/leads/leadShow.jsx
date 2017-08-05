import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import leadApi from '../../api/leadApi'
import {Grid, Row, Col, Clearfix, PageHeader, Button, Panel, Tabs, Tab, Table} from 'react-bootstrap'
import LeadHeader from './leadHeader'
import LeadForm from './leadForm'
import LeadDetail from './leadDetail'


class LeadShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lead: {}, isEditing: false}
  }

  componentDidMount() {
    var lead_id = this.props.match.params.id
    this.props.actions.loadLead(lead_id);
  }

  componentWillUnmount() {
    this.props.actions.resetLead();
  }

  handleEditChange() {
    this.setState({isEditing: true});
  }

  render() {
    return (
      <Row>
        <LeadHeader isShowing={true} onEditClick={this.handleEditChange.bind(this)} title={this.props.lead.name} description='Лид'/>

        {this.state.isEditing ? <LeadForm lead={this.props.lead}/> : <LeadDetail  lead={this.props.lead}/>}
        {/* <Col md={12} xs={12}>
          <Panel>
            <Tabs defaultActiveKey={1} id="lead-tabs">
            <Tab eventKey={1} title="Контакты">
              <Row>
                <Col md={4} xs={12}>
                  <Table responsive>
                    <tbody>
                        <tr>
                          <th>Имя</th>
                          <td>
                            {this.props.lead.name}
                          </td>
                        </tr>
                        <tr>
                          <th>телефон</th>
                          <td>{this.props.lead.phone}</td>
                        </tr>
                        <tr>
                          <th>email</th>
                          <td>{this.props.lead.email}</td>
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
        </Col> */}
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { lead: state.lead };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadShow);
