import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/admin/userActions'
import {Row, Col, Panel} from 'react-bootstrap'
import UserHeader from './userHeader'
import UsersList from './usersList'
import Loader from '../../common/loader'
import {getUsers} from '../../../reducers/admin/userReducer'

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false}
  }

  load(params) {
    this.setState({isLoading: true});
    this.props.actions.loadUsers(params).then(() => {this.setState({isLoading: false})})
  }

  componentDidMount() {
    this.load();
  }

  render() {
    return (
      <Row>
        <UserHeader isIndex={true}/>
        <Col md={12} xs={12}>
            {this.state.isLoading
              ? <Loader/>
              : <Panel>
                  <Panel.Body>
                    <UsersList
                      users={this.props.users}
                      meta={this.props.meta}
                      load={this.load.bind(this)}
                    />
                  </Panel.Body>
                </Panel>
            }
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return getUsers(state)
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
