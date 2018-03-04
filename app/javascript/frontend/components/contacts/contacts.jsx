import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions'
import {Row, Col, Panel} from 'react-bootstrap'
import ContactHeader from './contactHeader'
import ContactsList from './contactsList'
import Loader from '../common/loader'
import {getContacts} from '../../reducers/contactReducer'

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false}
  }

  load(params) {
    this.setState({isLoading: true});
    this.props.actions.loadContacts(params).then(() => {this.setState({isLoading: false})})
  }

  componentDidMount() {
    this.load();
  }

  handleStatusChange(data) {
    this.props.actions.updateContact(data)
  }

  render() {
    return (
      <Row>
        <ContactHeader isIndex={true}/>
        <Col md={12} xs={12}>
          <Panel>
            {this.state.isLoading ?
                <Loader/>
              :
                <ContactsList
                  contacts={this.props.contacts}
                  meta={this.props.meta}
                  load={this.load.bind(this)}
                  handleStatusChange={this.handleStatusChange.bind(this)}
                />
            }
          </Panel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return getContacts(state)
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
