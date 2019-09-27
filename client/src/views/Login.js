import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import firebase from 'firebase';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
    error_msg: ''
  };
  handleSubmit = e => {
    const that = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(userCred => {
            that.props.dispatch({ type: 'AUTHENTICATION', payload: true });
            that.props.dispatch({
              type: 'SET_USER',
              payload: userCred.user.uid
            });
          })
          .catch(function(error) {
            // Handle Errors here.
            console.log(error.code, 'error code');
            console.log(error.message, 'error message');
            // ...
            that.props.dispatch({ type: 'AUTHENTICATION', payload: false });
            that.setState({ error_msg: error.message });
            that.props.dispatch({
              type: 'ERROR_MESSAGE',
              payload: error.message
            });
          });
        //console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        {this.state.error_msg && <Alert message={this.state.error_msg} banner closable type="error" showIcon />}
        <Form onSubmit={this.handleSubmit} className='login-form centered-div'>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='email'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='Password'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className='login-form-forgot' href='/'>
              Forgot password
            </a>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'>
              Log in
            </Button>
            Or <a href='/'>register now!</a>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect()(WrappedNormalLoginForm);
