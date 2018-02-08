import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions'
import {Panel, Form, FormGroup, FormControl, Col, Checkbox, Button, InputGroup, Addon} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import NotificationItem from '../common/notificationItem'
import './signIn.css'

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
    }).catch((error) => {this.setState({error: error.response.data.error})});
  }

  render() {
    console.log("props: ", this.props);
    console.log('state: ', this.state);
    return (
      <div className="login-container">
        <Panel className='login-form center-block text-center'>
          <h5>Войдите в свой аккаунт</h5>
          <br/>
            {this.state.error && <NotificationItem className="text-left" type="error" message={this.state.error}/>}
          <Form horizontal>
            <Col sm={12}>
              <FormGroup controlId="formHorizontalEmail">
                <InputGroup>
                  <InputGroup.Addon>
                    <FontAwesome name="envelope" fixedWidth={true}/>
                  </InputGroup.Addon>
                  <FormControl name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col sm={12}>
              <FormGroup controlId="formHorizontalPassword">
                <InputGroup>
                  <InputGroup.Addon>
                    <FontAwesome name="lock" fixedWidth={true}/>
                  </InputGroup.Addon>
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
