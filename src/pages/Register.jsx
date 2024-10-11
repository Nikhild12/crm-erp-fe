import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Layout, Col, Divider } from 'antd';
import { Typography } from 'antd';

import RegisterForm from '@/forms/RegisterForm';
import AuthLayout from '@/layout/AuthLayout';
import SideContent from '@/components/SideContent';

import logo from '@/style/images/logo.png';
import { selectAuth } from '@/redux/auth/selectors';
import { register } from '@/redux/auth/actions';

const { Content } = Layout;
const { Title } = Typography;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { loading: isLoading } = useSelector(selectAuth);

  const onFinish = (values) => {
    values.role = 'SALES';
    console.log('values--', values);
    dispatch(register({ registerData: values }));
  };

  return (
    <>
      <AuthLayout sideContent={<SideContent />}>
        <Content
          style={{
            padding: '200px 30px 30px',
            maxWidth: '440px',
            margin: '0 auto',
          }}
        >
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 0 }} span={0}>
            <img
              src={logo}
              alt="Logo"
              style={{
                margin: '-70px auto 40px',
                display: 'block',
              }}
            />
            <div className="space50"></div>
          </Col>
          <Title level={1}>Sign up</Title>

          <Divider />
          <div className="site-layout-content">
            <Form
              name="signup"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <RegisterForm />
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                  loading={isLoading}
                >
                  Register
                </Button>
                Or <a href="/login">already have account? Login</a>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
