/**
 * @desc 删除空对象
 */
const delEmpty = function (input) {
  let str = {};
  const parakeys = Object.keys(input);
  for (let i = 0; i < parakeys.length; i++) {
      if ((input[parakeys[i]] != '' && input[parakeys[i]] != undefined) || input[parakeys[i]] === 0 || input[parakeys[i]] === false) {
          str[parakeys[i]] = input[parakeys[i]]
      }
  }
  return str
}

//获取当前时间，格式YYYY-MM-DD
const getNowFormatDate = function() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

const clearAllStorage = function () {
  localStorage.removeItem('wishDetail')
}

const getFormatTime = function (str) {
  if (!str) return ''
  const date = new Date(str)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let mm = date.getMinutes()
  if (m < 10) {
    m = `0${m}`
  }
  if (d < 10) {
    d = `0${d}`
  }
  if (h < 10) {
    h = `0${h}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  // const s = date.getSeconds()
  return `${y}-${m}-${d} ${h}:${mm}`
}

const getFormatDate = function (str) {
  if (!str) return ''
  const date = new Date(str)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  if (m < 10) {
    m = `0${m}`
  }
  if (d < 10) {
    d = `0${d}`
  }
  return `${y}-${m}-${d}`
}

export default {
  delEmpty,
  getFormatTime,
  getFormatDate,
  getNowFormatDate,
  clearAllStorage
}