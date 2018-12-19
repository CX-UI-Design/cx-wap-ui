// import dayjs from 'dayjs';
// import {isNumber} from 'lodash';

export default {
  // dateFormat: (value, format = 'YYYY-MM-DD') =>
  //   value ? dayjs(value * 1000).format(format) : '',
  // uan: value =>
  //   isNumber(value) ? `¥${(value / 100).toFixed(2)}` : value
  /**
   * boolean 转换 =》是 - 否
   * @param val
   * @returns {*}
   */
  booleanTo: (val) => {
    if (val) {
      return '是';
    } else {
      return '否';
    }
  },
}
