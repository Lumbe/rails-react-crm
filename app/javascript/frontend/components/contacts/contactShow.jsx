import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions'
import {Row} from 'react-bootstrap'
import ContactHeader from './contactHeader'
import ContactForm from './contactForm'
import ContactDetail from './contactDetail'
import {getContact} from '../../reducers/contactReducer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {SubmissionError} from 'redux-form'

class ContactShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
  }

  componentDidMount() {
    if (!this.props.contact) {
      let contact_id = this.props.match.params.id;
      this.props.actions.loadContact(contact_id);
    }
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleFormSubmit(values) {
    return this.props.actions.updateContact(values).then(
      () => {
        this.setState({isEditing: false});
      },
      error => {
        throw new SubmissionError(error.response.data.errors)
      }
    );
  }

  handleStatusChange(data) {
    this.props.actions.updateContact(data)
  }

  destroyContact(event) {
    event.preventDefault();
    if (confirm('Удалить контакт ' + this.props.contact.name + '?')) {
      this.props.actions.destroyContact(this.props.contact).then(() => {
        this.props.history.push('/contacts');
      });
    }
  }

  render() {
    const {contact, availableDepartments} = this.props;
    return (
      <Row>
        {!contact ?
          <FontAwesomeIcon icon="spinner" spin/>
        :
          <div><ContactHeader
            isShow={true}
            onEditClick={this.toggleEdit.bind(this)}
            handleDestroy={this.destroyContact.bind(this)}
            isEditing={this.state.isEditing}
            title={contact.name}
            contact={contact}
            handleStatusChange={this.handleStatusChange.bind(this)}
            description='Контакт'/>
          {this.state.isEditing ?
            <ContactForm
              contact={contact}
              availableDepartments={availableDepartments}
              handleFormSubmit={this.handleFormSubmit.bind(this)}
              onCancel={this.toggleEdit.bind(this)}
            />
            :
            <ContactDetail  contact={contact}/>
          }</div>
        }
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let itemId = ownProps.match.params.id;
  return {
    contact: getContact(state, itemId),
    availableDepartments: state.currentUser.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactShow);
