/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let o = x;
  if (x < 0) {
    return false;
  }
  var n = 0;
  while(x > 0) {
    n = n * 10  + x % 10; 
    x = parseInt(x / 10);
  }
  return o == n;
};
// @lc code=end

