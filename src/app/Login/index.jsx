import React from 'react';
import './login.scss';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'components/hook/Router';

export const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const {
  //   userStore: { submitLogin }
  // } = useStores();

  const onFinish = async (value) => {
    setLoading(true);
    const params = value;

    // const ok = await submitLogin(params);
    if (ok) {
      router.history.push('/');
    }
    setLoading(false);
  };

  return (
    <div className="wrapper">
      <div className="form_wrap">
        <p className="form_name">用户登陆</p>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large" loading={loading}>
              登 陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
