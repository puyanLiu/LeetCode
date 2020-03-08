/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var s = '1';
    for(var i = 2; i <= n; i++) {
        var index = 1;
        var pre = s[0];
        var ns = '';
        for (var j = 1; j < s.length; j++) {
            if (s[j] == pre) {
                index++;
            } else {
                ns = ns + index + pre;
                index = 1;
                pre = s[j];
            }
        }
        if (index != 0) {
            ns = ns + index + pre;
        }
        s = ns;
    }
    return s;
};
// @lc code=end
