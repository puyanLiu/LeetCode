/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = [];
  for(var i = 0, len = s.length; i < len; i++) {
    switch(s[i]) {
      case '(':
        arr.push('(');
        break;
      case ')':
        if (arr[arr.length - 1] == '(') 
          arr.pop();
        else
          return false;
        break;
      case '[':
        arr.push('[');
        break;
      case ']':
        if (arr[arr.length - 1] == '[') 
          arr.pop();
        else
          return false;
        break;
      case '{':
        arr.push('{');
        break;
      case '}':
        if (arr[arr.length - 1] == '{') 
          arr.pop();
        else
          return false;
        break;
    }
  }
  return arr.length == 0;
};
// @lc code=end

