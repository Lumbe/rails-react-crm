import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import {Grid, Row, Col, Clearfix, PageHeader, Form, FormGroup, FormControl, ControlLabel, Button, Panel} from 'react-bootstrap'


class LeadNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      name: '',
      phone: '',
      email: ''
    };
  }

  componentDidMount() {
    // this.props.actions.loadLeads();
  }

  render() {
    return (
      <Row>
        <PageHeader className="page-header-default">
          Новый Лид
        </PageHeader>
        <Col md={6} xs={12}>
          <Panel>
            <form>
              <FormGroup controlId="formHorizontalName">
                <ControlLabel>Имя</ControlLabel>
                <FormControl type="text" placeholder="Иван" />
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup controlId="formHorizontalPhone">
                <ControlLabel>Phone</ControlLabel>
                <FormControl type="text" placeholder="+38(097)123-45-67" />
              </FormGroup>
              <FormGroup>
                <Button type="submit">
                  Сохранить
                </Button>
              </FormGroup>
            </form>
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default LeadNew

// function mapStateToProps(state, ownProps) {
//   return {
//     leads: state.leads
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(leadActions, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Leads);
