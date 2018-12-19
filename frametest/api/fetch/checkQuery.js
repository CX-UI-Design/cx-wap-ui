/*
 * check query for api reuqest
 * You can use those fun in help js
 * created: 2018/12/11.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */

/*==========================================================================================================================*/
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * filters query is null or not
 * @param query
 * @returns {*}
 */
function filterNull(query) {
  if (typeof query === 'Object') {
    for (let key in query) {
      if (query[key] === null) {
        delete query[key]
      }
      if (toType(query[key]) === 'string') {
        query[key] = query[key].trim()
      } else if (toType(query[key]) === 'object') {
        query[key] = filterNull(query[key])
      } else if (toType(query[key]) === 'array') {
        query[key] = filterNull(query[key])
      }
    }
    return query;
  }
  else {
    return false
  }
}

/**
 * data filters
 * @param query
 * @returns {*}
 */
export default (query) => {
  if (query) {
    return filterNull(query);
  }
  else {
    return {};
  }
}
