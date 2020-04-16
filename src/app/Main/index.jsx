import React from 'react';
import './main.scss';
import { Route, Switch } from 'react-router-dom';
import { ModulesRouters } from 'config/routers';
import { Sidebar } from './Sidebar';
// import { Header } from './Header';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">Logo</div>
          <Sidebar />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            this is a header
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              {ModulesRouters.map((i, idx) => {
                if (i.component) {
                  return <Route key={idx} {...i}></Route>;
                }
                return null;
              })}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export { SiderDemo };
