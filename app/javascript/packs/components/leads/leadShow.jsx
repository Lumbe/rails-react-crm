import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import {Row} from 'react-bootstrap'
import LeadHeader from './leadHeader'
import LeadForm from './leadForm'
import LeadDetail from './leadDetail'


class LeadShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
  }

  componentDidMount() {
    var lead_id = this.props.match.params.id;
    this.props.actions.loadLead(lead_id);
  }

  componentWillUnmount() {
    this.props.actions.resetLead();
  }

  handleEditChange() {
    this.setState({isEditing: !this.state.isEditing});
  }

  updateLeadState(event) {
    const field = event.target.name;
    const lead = this.props.lead;
    lead[field] = event.target.value;
    return this.setState({lead: lead});
  }

  saveLead(event) {
    event.preventDefault();
    this.props.actions.updateLead(this.state.lead).then(response => {
      this.setState({isEditing: false});
    });
  }

  render() {
    return (
      <Row>
        <LeadHeader isShow={true} onEditClick={this.handleEditChange.bind(this)} title={this.props.lead.name} description='Лид'/>
        {this.state.isEditing ? <LeadForm lead={this.props.lead} onChange={this.updateLeadState.bind(this)} onSave={this.saveLead.bind(this)}/> : <LeadDetail  lead={this.props.lead}/>}
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
