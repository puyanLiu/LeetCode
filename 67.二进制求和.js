/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aLen = a.length, bLen = b.length;
    let maxLen = Math.max(aLen, bLen);
    var newStr = '';
    var isAdd = 0;
    for (var i = 1; i <= maxLen; i++) {
        let s = isAdd;
        if (aLen - i >= 0) {
            s += parseInt(a[aLen - i]);
        }
        if (bLen - i >= 0) {
            s += parseInt(b[bLen - i]);
        }
        if (s >= 2) {
            isAdd = 1;
            s = s - 2;
        } else {
            isAdd = 0;
        }
        newStr = s.toString() + newStr;
    }
    if (isAdd == 1) {
        newStr = '1' + newStr;
    }
    return newStr;
};
// @lc code=end

