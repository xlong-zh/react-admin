import React from 'react';
import styles from './headerBar.module.scss';
import { Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export const HeaderBar = (props) => {
  // console.log(props);
  // useEffect(() => {
  //   handleClick(router.location.pathname);
  // }, []);

  // const [current, setCurrent] = useState('mail');

  return (
    <div className={styles.headerbar}>
      {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: styles.trigger,
        onClick: props.toggle,
      })}
      <Menu mode="horizontal" selectedKeys={['']}>
        <SubMenu
          title={
            <span>
              <SettingOutlined />
              欢迎您，XXX
            </span>
          }
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="logout">
          <LoginOutlined />
          退出登陆
        </Menu.Item>
      </Menu>
    </div>
  );
};
