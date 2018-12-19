import {Dialog, Toast} from 'vant'

/**
 * 普通alert弹框
 * @param message
 * @param fn
 */
export default {
  alert: (message, fn) => {
    Dialog.alert({
      title: '提示',
      message
    }).then(fn)
  }
}
