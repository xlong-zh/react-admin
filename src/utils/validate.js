const validataFun = {
  // 邮箱
  isEmail: function(str) {
    // \w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}
    let reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str.trim());
  },
  //手机号
  isPhoneNo: function(str) {
    // 0?(13|14|15|17|18|19)[0-9]{9}
    // /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    let reg = /^1[0-9]{10}$/;
    return reg.test(str.trim());
  },
  //金额
  isMoney: function(str) {
    let reg = /(^[0-9]+\.?[0-9]+$)|(^[1-9]$)/;
    return reg.test(str.trim());
  },
  //座机
  isTelPhone: function(str) {
    let reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    return reg.test(str.trim());
  },
  //姓名
  isRealName: function(str) {
    let reg = /^[\u4E00-\u9FA5]{2,8}$/;
    return reg.test(str.trim());
  },
  // 身份证
  isIdcard: function(str) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    let reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(str.trim());
  },
  // 密码
  isPassword: function(str) {
    // 密码由6-18英文字符、数字或下划线组成
    let reg = /^[A-Za-z0-9_-]{6,18}$/;
    return reg.test(str.trim());
  },
  // qq
  isQQNo: function(str) {
    let reg = /^[1-9][0-9]{1,15}$/;
    return reg.test(str.trim());
  },
  // URL地址
  isURL: function(str) {
    let reg = /^http[s]?:\/\/.*/;
    return reg.test(str.trim());
  }
};
export default validataFun;
