import { Login } from 'app/Login';
import { Main } from 'app/Main';

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
    component: Main,
    path: '/',
    exact: false,
    private: true,
  },
];
