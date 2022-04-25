import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

const LoginPage = (props) => {
    
    
    const onFinish = (values: any) => {
    console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    };

    const handleSignupWish = () => {
        props.setWannaSignUp(true);
        props.setWannaLogin(false);
    }

  return (
    <>
        <div className='login-container'>
            <h2>Login</h2>
            <div className='login-form'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                        Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='login-newuser?'> <p>Here for the first time?</p>
                 <Button  onClick={handleSignupWish} type="primary">Register</Button>
            </div>
        </div>
    </>
  )
}

export default LoginPage