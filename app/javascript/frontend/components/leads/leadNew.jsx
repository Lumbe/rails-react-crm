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
    return { lead: {
      name: '',
      phone: '',
      email: ''
    }};
  }

  updateLeadState(event) {
    const field = event.target.name;
    const lead = this.state.lead;
    lead[field] = event.target.value;
    return this.setState({lead: lead});
  }

  saveLead(e) {
    (e).preventDefault();
    this.props.actions.createLead(this.state.lead).then(response => {
      response && this.props.history.push(response.data.lead.id.toString());
    });
  }

  render() {
    return (
      <Row>
        <LeadHeader isNew={true} title="Новый лид" description=""/>
        <LeadForm lead={this.state.lead} onChange={this.updateLeadState.bind(this)} onSave={this.saveLead.bind(this)}/>
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
