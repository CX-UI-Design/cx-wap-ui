/*==========================================================================================================================*/
import fetch from '../fetch'

/*==========================================================================================================================*/

/**
 * get 测试
 */
export function get_test(query) {
  return fetch({
    url: '/test/get',
    method: 'get',
    param: query
  })
}

/**
 * post 测试
 */
export function post_test(query) {
  return fetch({
    url: '/test/post',
    method: 'post',
    data: query
  })
}
