import React from 'react'
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const SignupPage = (props) => {
    
    const navigate = useNavigate();

    const onFinish = (values: any) => {
    console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    };

    const handleLoginWish = () => {
        props.setWannaLogin(true);
        props.setWannaSignUp(false);
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="91">+91</Option>
          </Select>
        </Form.Item>
      );

    const handleSuccessfulRegisteration = ()=>{
        navigate('/feed');
    }

  return (
    <>
        <div className='signup-container'>
            <h2>Sign-Up</h2>
            <div className='signup-form'>
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
                    <Form.Item name='E-mail' label="Email" rules={[{ type: 'email', required: true, message: 'Please enter your E-mail!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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
                        <Button type="primary" htmlType="submit" onClick={handleSuccessfulRegisteration}>
                        Join
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='login-newuser?'> <p>Already have an account?</p>
                 <Button onClick={handleLoginWish} type="primary">Back to Login</Button>
            </div>
        </div>
    </>
  )
}

export default SignupPage