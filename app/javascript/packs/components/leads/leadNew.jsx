import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions';
import {Grid, Row, Col, Clearfix, PageHeader, Form, FormGroup, FormControl, ControlLabel, Button, Panel} from 'react-bootstrap'
import LeadForm from './leadForm';

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
        <LeadForm/>
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
