import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions';
import {Grid, Row, Col, Clearfix, PageHeader, Form, FormGroup, FormControl, ControlLabel, Button, Panel} from 'react-bootstrap'
import LeadHeader from './leadHeader';
import LeadForm from './leadForm';

class LeadNew extends React.Component {

  render() {
    return (
      <Row>
        <LeadHeader isNew={true} title="Новый лид" description=""/>
        <LeadForm/>
      </Row>
    );
  }
}

export default LeadNew
