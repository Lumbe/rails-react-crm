import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions';
import {Row} from 'react-bootstrap'
import LeadHeader from './leadHeader';
import LeadForm from './leadForm';

class LeadNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {
      isSubmitting: false,
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
        department_id: ''
      }
    };
  }

  updateLeadState(event) {
    console.log('event.target', event.target);
    const field = event.target.name;
    const lead = this.state.lead;
    lead[field] = event.target.value;
    return this.setState({lead: lead});
  }

  saveLead(e) {
    (e).preventDefault();
    this.setState({isSubmitting: true});
    this.props.actions.createLead(this.state.lead).then(response => {
      this.setState({isSubmitting: false});
      response && this.props.history.push(response.data.lead.id.toString());
    });
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
          isSubmitting={this.state.isSubmitting}
          onChange={this.updateLeadState.bind(this)}
          onSave={this.saveLead.bind(this)}
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
