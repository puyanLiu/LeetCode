/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [];
  for (let i = 1; i <= numRows; i++) {
    let a = [];
    for (let j = 1; j <= i; j++) {
      if (j == 1 || j == i) {
        a.push(1);
      } else {
        a.push(arr[i - 2][j - 2] + arr[i - 2][j - 1]);
      }
    }
    arr.push(a);
  }
  return arr;
};
// @lc code=end

