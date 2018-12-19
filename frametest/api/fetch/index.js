/*
 * api request method
 * You can use those fun in help js
 * created: 2018/12/11.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/

import axios from 'axios';
import dataFilter from './checkQuery'

console.log('当前运行环境：',process.env);

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'appId': '07d8737811434732',
    "appClientType": "pc",
  }
});


service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const resData = response.data;
    if (resData && (resData.resultCode === "200" || resData.resultCode === 200)) {
      return Promise.resolve(resData);
    }
    else {
      return Promise.reject(resData);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;

