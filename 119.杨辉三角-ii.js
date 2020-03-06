/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let arr = [];
  var index = 1;
  for (let i = 0; i <= rowIndex; i++) {
    arr.push(index);
    index = index * (rowIndex - i) / (i + 1);
  }
  return arr;
};
// @lc code=end

