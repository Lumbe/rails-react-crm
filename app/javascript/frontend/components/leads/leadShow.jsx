import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import {Row} from 'react-bootstrap'
import LeadHeader from './leadHeader'
import LeadForm from './leadForm'
import LeadDetail from './leadDetail'
import {getLead} from '../../reducers/leadReducer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class LeadShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false, isSubmitting: false}
  }

  componentDidMount() {
    if (!this.props.lead) {
      let lead_id = this.props.match.params.id;
      this.props.actions.loadLead(lead_id);
    }
  }

  toggleEdit() {
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
    this.setState({isSubmitting: true});
    this.props.actions.updateLead(this.state.lead).then(response => {
      this.setState({isSubmitting: false});
      response && this.setState({isEditing: false});
    });
  }

  destroyLead(event) {
    event.preventDefault();
    this.setState({isSubmitting: true});
    if (confirm('Удалить лид ' + this.props.lead.name + '?')) {
      this.props.actions.destroyLead(this.props.lead).then(() => {
        this.setState({isSubmitting: false});
        this.props.history.push('/leads');
      });
    }
  }

  render() {
    const {lead, availableDepartments} = this.props;
    return (
      <Row>
        {!lead ?
          <FontAwesomeIcon icon="spinner" spin/>
        :
          <div><LeadHeader
            isShow={true}
            onEditClick={this.toggleEdit.bind(this)}
            handleDestroy={this.destroyLead.bind(this)}
            isEditing={this.state.isEditing}
            title={lead.name}
            description='Лид'/>
          {this.state.isEditing ?
            <LeadForm
              lead={lead}
              availableDepartments={availableDepartments}
              isSubmitting={this.state.isSubmitting}
              onChange={this.updateLeadState.bind(this)}
              onSave={this.saveLead.bind(this)}
              onCancel={this.toggleEdit.bind(this)}
            />
            :
            <LeadDetail  lead={lead}/>
          }</div>
        }
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let itemId = ownProps.match.params.id;
  console.log('getLead', getLead(state, itemId));
  return {
    lead: getLead(state, itemId),
    availableDepartments: state.currentUser.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadShow);
