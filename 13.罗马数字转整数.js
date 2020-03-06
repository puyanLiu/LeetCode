/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var SRowmEnum = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var RomeEnum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}; 

var romanToInt = function(s) {
  var array = s.split('');
  var sum = 0;
  for (var i = 0, len = array.length; i < len; i++) {
    var n = SRowmEnum[array[i] + array[i + 1]];
    if (undefined != n) {
      i++;
    } else {
      n = RomeEnum[array[i]];
      if (undefined == n) {
        n = 0;
      }
    }
    sum += n;
  }
  return sum;
};
// @lc code=end

