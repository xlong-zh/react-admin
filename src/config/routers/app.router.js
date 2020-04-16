import { Login } from 'app/Login';
import { SiderDemo } from 'app/Main';

export const AppRouters = [
  {
    name: 'Login',
    component: Login,
    path: '/login',
    exact: true,
    private: false,
  },
  {
    name: 'Main',
    component: SiderDemo,
    path: '/',
    exact: false,
    private: true,
  },
];
