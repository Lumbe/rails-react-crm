import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as leadActions from '../../actions/leadActions'
import {Grid, Row, Col, Clearfix, PageHeader, Table, Button, ButtonToolbar, Panel} from 'react-bootstrap'
import LeadHeader from './leadHeader'
import LeadsList from './leadsList'

class Leads extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = this.defaultProps();
  // }
  //
  // defaultProps() {
  //   return {leads: [],
  //           isEditing: false,
  //           isNew: false,
  //           };
  // }

  componentDidMount() {
    this.props.actions.loadLeads();
  }

  render() {
    return (
      <Row>
          <LeadHeader isIndex={true}/>
        <Col md={12} xs={12}>
          <Panel>
            <LeadsList leads={this.props.leads}/>
          </Panel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    leads: state.leads
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
