import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as leadActions from '../../actions/leadActions'
import {Grid, Row, Col, Clearfix, PageHeader, Table, Button, ButtonToolbar, Panel} from 'react-bootstrap'
import LeadHeader from './leadHeader'

class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {leads: []};
  }

  componentDidMount() {
    this.props.actions.loadLeads();
  }

  render() {
    return (
      <Row>
          <LeadHeader lead={{}}/>
          {/* <PageHeader className="page-header-default">
            Лиды <small>Холодные контакты</small>
            <Button bsStyle="success" className="pull-right">Добавить лид</Button>
          </PageHeader> */}
        <Col md={12} xs={12}>
          <Panel>
            <Table responsive>
              <thead>
                <tr>
                  <th>Статус</th>
                  <th>Имя</th>
                  <th>Телефон</th>
                  <th>E-mail</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {this.props.leads.map((lead) => {
                  return <tr key={lead.id}>
                    <td>статус</td>
                    <td>
                      <Link to={'leads/' + lead.id}>
                        {lead.name}
                      </Link>
                    </td>
                    <td>{lead.phone}</td>
                    <td>{lead.email}</td>
                    <td>
                      <ButtonToolbar>
                        <Button>edit</Button>
                        <Button bsStyle="danger">delete</Button>
                      </ButtonToolbar>
                    </td>
                  </tr>
                })}
              </tbody>
            </Table>
          </Panel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    leads: state.leads
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
