/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var com = '';
  var len = strs.length;
  if (len > 0) {
    com = strs[0];
  }
  for (var i = 1, len = strs.length; i < len; i++) {
    for (var j = 0, jLen = com.length; j < jLen; j++) {
      if (com[j] != strs[i][j]) {
        com = com.substr(0, j);
        break;
      }  
    }
    if (com == '') {
      break;
    }
  }
  return com;
};
// @lc code=end

