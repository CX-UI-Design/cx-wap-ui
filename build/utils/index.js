/**
 * 将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * dateFormat("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * dateFormat("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 * @param fmt
 * @returns {*}
 */
var dateFormat = function (fmt) {
  const date = new Date();
  const o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};


/**
 * tips message
 * @param author
 */
exports.tips = function (author) {
  return `/*
 * Those files is auto gererated by build/build-components-entry.js in every components files
 * author: ${author}
 * created: ${dateFormat('yyyy-MM-dd')}.
 * copyright (c) ${dateFormat('yyyy')} Broccoli spring( gcx )
 * == eslint-disable ==
 */`;
};

/**
 * 将 Date 转化为指定格式的String
 * @type {function(*=): *}
 */
exports.dateFormat = dateFormat;
