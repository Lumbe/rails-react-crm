import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import {Row, Col, Panel} from 'react-bootstrap'
import LeadHeader from './leadHeader'
import LeadsList from './leadsList'
import Loader from '../common/loader'

class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false}
  }

  load(params) {
    this.setState({isLoading: true});
    this.props.actions.loadLeads(params).then(() => {this.setState({isLoading: false})})
  }

  componentDidMount() {
    this.load();
  }

  render() {
    return (
      <Row>
        <LeadHeader isIndex={true}/>
        <Col md={12} xs={12}>
          <Panel>
            {this.state.isLoading ?
                <Loader/>
              :
                <LeadsList
                  leads={this.props.leads}
                  meta={this.props.meta}
                  load={this.load.bind(this)}
                />
            }
          </Panel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    leads: state.leads.leads,
    meta: state.leads.meta
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(leadActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
