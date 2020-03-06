/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == '' || haystack == needle)
    return 0;
  let haystackLength = haystack.length, needleLength = needle.length;
  if (haystackLength < needleLength) {
    return -1;
  }
  for (var i = 0; i <= haystackLength - needleLength; i++) {
    let hayStr = haystack.substr(i, needleLength);
    if (hayStr == needle) {
      return i;
    }
  }
  return -1;
};

// @lc code=end

