import axios from 'axios';
import { APP_CONFIG } from 'config/app';
import { TOKEN_KEY, UNAUTHORIZED_STATUS, TOKEN_HEADER_KEY } from 'consts';
import { routersMap } from 'config/routers';
import { createHashHistory } from 'history';

const history = createHashHistory();

const _http = axios.create({
  baseURL: 'http://129.28.127.242:8080',
  timeout: 30000, // 请求超时时间
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  // headers: { 'Content-Type': 'application/json' },
  // transformRequest: [
  //   (data) => {
  //     if (data instanceof FormData) {
  //       return data;
  //     }
  //     return JSON.stringify(data);
  //   },
  // ],
  // withCredentials: true,
});

axios.interceptors.request.use(
  (config) => {
    config.headers[TOKEN_HEADER_KEY] = localStorage.getItem(TOKEN_KEY) || '';
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params,
      };
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (error && error.response) {
      const status = error.response.status;
      if (status >= 500) {
        return Promise.reject(error.response);
      }
      if (UNAUTHORIZED_STATUS.includes(status)) {
        localStorage.removeItem(TOKEN_KEY);
        history.push(routersMap.getPathByName('Login'));
      }
    }
    return Promise.reject(error.response);
  }
);


export const http = _http;
