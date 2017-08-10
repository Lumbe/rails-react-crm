import React from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios'
import * as userActions from '../../actions/userActions'
import UserApi from '../../api/userApi'
import {Form, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Clearfix, Checkbox, Button} from 'react-bootstrap'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultProps();
  }

  defaultProps() {
    return {email: '', password: ''};
  }

  componentDidMount() {
    // executes when component is mounted
  }

  componentWillUnmount() {
    // executes when component is unmounted
  }

  handleChange(e) {
    // if (e.target.type === 'email') {
    //   this.setState({email: e.target.value});
    // } else if (e.target.type === 'password') {
    //   this.setState({password: e.target.value});
    // }
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  loginUser(e) {
    e.preventDefault();
    // console.log(this.state.email);
    // console.log(this.state.password);
    // var email = $('input[type=email]').value;
    // var password = $('input[type=password]').value;
    this.props.actions.createUserSession(this.state);
    // UserApi.signIn(this.state);
    // console.log('clicked')
  }

  render() {
    return (
      <Row>
        <Col md={12} xs={12}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" onClick={this.loginUser.bind(this)}>
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    email: state.email,
    password: state.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
