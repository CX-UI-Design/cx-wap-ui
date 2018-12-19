/*==========================================================================================================================*/
import fetch from '../fetch'
import qs from 'querystring';

/*==========================================================================================================================*/

/**
 * 表数据-获取,表格数据获取
 */
export function loginByUserName(query) {
  return fetch({
    url: '/oauth/login',
    method: 'post',
    data: query,
    transformRequest: [function (data) {
      data = qs.stringify(data);
      console.log('登录请求发送前数据处理，处理结果：————' + data);
      return data;
    }]
  })
}

