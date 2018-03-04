import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';
import {Row} from 'react-bootstrap'
import ContactHeader from './contactHeader';
import ContactForm from './contactForm';
import {SubmissionError} from 'redux-form'

class ContactNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
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
    return this.props.actions.createContact(values).then(
      response => {
        this.props.history.push(response.data.contact.id.toString());
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
        <ContactHeader isNew={true} title="Новый контакт" description=""/>
        <ContactForm
          contact={this.state.contact}
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
    actions: bindActionCreators(contactActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactNew);
