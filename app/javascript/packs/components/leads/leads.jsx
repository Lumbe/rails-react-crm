import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as leadActions from '../../actions/leadActions'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'


class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {leads: []};
  }

  componentDidMount() {
    this.props.actions.loadLeads();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.leads.map((lead) => {
            return <li key={lead.id}>{lead.name}</li>
          })}
        </ul>
      </div>
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
