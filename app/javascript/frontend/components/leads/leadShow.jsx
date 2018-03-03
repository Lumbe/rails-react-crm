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
import {SubmissionError} from 'redux-form'

class LeadShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
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

  handleFormSubmit(values) {
    return this.props.actions.updateLead(values).then(
      () => {
        this.setState({isEditing: false});
      },
      error => {
        throw new SubmissionError(error.response.data.errors)
      }
    );
  }

  destroyLead(event) {
    event.preventDefault();
    if (confirm('Удалить лид ' + this.props.lead.name + '?')) {
      this.props.actions.destroyLead(this.props.lead).then(() => {
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
              handleFormSubmit={this.handleFormSubmit.bind(this)}
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
