import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}}
  }

  componentDidMount() {
    // console.log(this.props.actions)
    this.props.actions.loadCurrentUser("asdasd");
  }

  componentWillUnmount() {
    // this.props.actions.resetUser();
  }

  render() {
    console.log(this.props)
    return (
      <div>
          Юзер
          {this.props.user.id}
          <br/>
          {this.props.user.email}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
