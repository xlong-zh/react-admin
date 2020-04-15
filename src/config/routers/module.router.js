import { Home } from 'app/Main/Modules/Home';
import { User } from 'app/Main/Modules/User';
import { Profile } from 'app/Main/Modules/Config/Profile';
import { Website } from 'app/Main/Modules/Config/Website';
// import {
//   HomeOutlined,
//   MoneyCollectOutlined,
//   UserOutlined,
//   SettingOutlined,
//   Html5Outlined,
//   ProfileOutlined,
//   PayCircleOutlined
// } from '@ant-design/icons';

export const ModulesRouters = [
  {
    name: 'Home',
    // icon: HomeOutlined,
    component: Home,
    path: '/',
    exact: true,
  },
  {
    name: 'User',
    // icon: UserOutlined,
    component: User,
    path: '/user',
    exact: true,
  },
  {
    name: 'Config',
    // icon: SettingOutlined,
    exact: true,
  },
  {
    parentName: 'Config',
    // icon: ProfileOutlined,
    name: 'Profile',
    component: Profile,
    path: '/config/profile',
    exact: true,
  },
  {
    parentName: 'Config',
    // icon: Html5Outlined,
    name: 'Website',
    component: Website,
    path: '/config/website',
    exact: true,
  },
];
