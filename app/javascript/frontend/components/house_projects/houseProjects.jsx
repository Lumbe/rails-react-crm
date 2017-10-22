import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as houseProjectActions from '../../actions/houseProjectActions'
import {Grid, Row, Col, Clearfix, PageHeader, Table, Button, ButtonToolbar, Panel} from 'react-bootstrap'
import HouseProjectHeader from './houseProjectHeader'
import HouseProjectsIndex from './houseProjectsIndex'

class HouseProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {houseProjects: []};
  }

  componentDidMount() {
    this.props.actions.loadHouseProjects();
    console.log("props: ", this.props)
    console.log("state: ", this.state)
  }

  render() {
    return (
      <Row>
          <HouseProjectHeader/>
        <Col md={12} xs={12}>
          <Panel>
            {console.log('render: ', this.props)}
            <HouseProjectsIndex houseProjects={this.props.houseProjects}/>
          </Panel>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    houseProjects: state.houseProjects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(houseProjectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseProjects);
