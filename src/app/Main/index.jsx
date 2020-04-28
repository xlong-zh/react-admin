import React, { useState } from 'react';
import styles from './main.module.scss';
import { Route, Switch } from 'react-router-dom';
import { ModulesRouters } from 'config/routers';
import { Sidebar } from './Sidebar';
import { HeaderBar } from './HeaderBar';
// import { Crumb } from 'components/Crumb';
import { NavTags } from 'components/NavTags';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

export const SiderDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>Logo</div>
        <Sidebar />
      </Sider>
      <Layout className={styles.site_layout}>
        <Header className={styles.site_layout_background} style={{ padding: 0 }}>
          <HeaderBar collapsed={collapsed} toggle={toggle} />
        </Header>

        <Content
          className={`${styles.site_layout_background}`}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '90vh',
          }}
        >
          {/* <Crumb/> */}
          <NavTags />
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
};
