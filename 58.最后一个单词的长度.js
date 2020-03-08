/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s == null || s.length < 1) 
        return 0;
    let arr = s.split(' ');
    var len = arr.length;

    for (var i = len - 1; i >= 0; i--) {
        let l = arr[i].length;
        if (l != 0)
            return l;
    }
    return 0;
};
// @lc code=end

