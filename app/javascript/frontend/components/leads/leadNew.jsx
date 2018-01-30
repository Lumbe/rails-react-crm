import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/reduxApiMiddlware';
// import * as leadActions from '../../actions/leadActions';
import {Row} from 'react-bootstrap'
import LeadHeader from './leadHeader';
import LeadForm from './leadForm';
import { SubmissionError } from 'redux-form';

class LeadNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return { lead: {
      name: '',
      phone: '',
      email: ''
    }};
  }

  handleCancel() {
    this.props.history.push('/leads')
  }

  submitForm(values) {
    console.log('handleSubmit values', values);
    this.props.actions.createLead(values).then(response => {
      this.props.history.push(response.payload.lead.id.toString());
    });
  }

  render() {
    return (
      <Row>
        <LeadHeader isNew={true} title="Новый лид" description=""/>
        <LeadForm error={this.state.error} lead={this.state.lead} submitForm={this.submitForm.bind(this)} onCancel={this.handleCancel.bind(this)}/>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    lead: state.lead
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadNew);
