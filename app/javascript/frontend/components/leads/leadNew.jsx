import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions';
import {Row} from 'react-bootstrap'
import LeadHeader from './leadHeader';
import LeadForm from './leadForm';
import {SubmissionError} from 'redux-form'

class LeadNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lead: {
        name: '',
        phone: '',
        email: '',
        location: '',
        project: '',
        square: '',
        floor: '',
        question: '',
        region: '',
        source: '',
        online_request: false,
        come_in_office: false,
        phone_call: false,
        department: ''
      }
    }
  }

  handleFormSubmit(values) {
    console.log('handleFormSubmit values', values);
    return this.props.actions.createLead(values).then(
      response => {
        this.props.history.push(response.data.lead.id.toString());
      },
      error => {
        console.log('error response',error.response.data.errors);
        throw new SubmissionError(error.response.data.errors)
      }
    )
  }

  handleCancel() {
    this.props.history.goBack();
  }

  render() {
    const {availableDepartments} = this.props;
    return (
      <Row>
        <LeadHeader isNew={true} title="Новый лид" description=""/>
        <LeadForm
          lead={this.state.lead}
          availableDepartments={availableDepartments}
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        />
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    availableDepartments: state.currentUser.departments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadNew);
