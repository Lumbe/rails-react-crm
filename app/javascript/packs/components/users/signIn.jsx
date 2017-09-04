import React from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios'
import * as authActions from '../../actions/authActions'
import AuthApi from '../../api/authApi'
import {Panel, Form, FormGroup, FormControl, ControlLabel, Col, Checkbox, Button, InputGroup, Addon} from 'react-bootstrap'

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
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  loginUser(e) {
    e.preventDefault();
    this.props.actions.createUserSession(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="login-container">
        <Panel className='login-form center-block text-center'>
          <h5>Войдите в свой аккаунт</h5>
          <br/>
          <Form horizontal>
            <Col sm={12}>
              <FormGroup controlId="formHorizontalEmail">
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col sm={12}>
              <FormGroup controlId="formHorizontalPassword">
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                </InputGroup>
              </FormGroup>
            </Col>

            <FormGroup>
              <Col sm={12}>
                <Checkbox>Запомнить меня</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={12}>
                <Button bsStyle='info' type="submit" onClick={this.loginUser.bind(this)}>
                  Войти
                </Button>
              </Col>
            </FormGroup>
          </Form>
    </Panel>
      </div>
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
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
