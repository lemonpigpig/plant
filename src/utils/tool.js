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
/**
 * 
 * 一分钟以内显示 刚刚
 * 一小时以内一分钟以外显示XX分钟前
 * 一天以内一小时以外显示XX小时前
 * 一年以内一天以外显示 MM-DD HH:MM
 * 一年以外显示  YYYY-MM-DD HH:MM
 */
const getFormatTime = function (time){
  var date = new Date(time);
  date = new Date((date.getTime() - 3600000*8));//转换为北京时间
  var currentDate = new Date();
  var mills = date.getTime();
  var currentMills = currentDate.getTime();
  var distance = currentMills - mills;
  var finalStr = '';
  
  if(distance <= 1000*60){
      finalStr = "刚刚";
  } else if(distance <= 1000*60*60){
      finalStr = (distance/60/1000).toFixed(0) + "分钟前";
  } else if(distance <= 1000*60*60*24) {
      finalStr = (distance/1000/60/60).toFixed(0)+"小时前";
  } else if(distance <= 1000*60*60*24*365){
      finalStr = (date.getMonth() + 1) + '-' +date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  } else {
      finalStr =date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  }
  return finalStr;
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

export default {
  delEmpty,
  getFormatTime,
  getNowFormatDate,
  clearAllStorage
}