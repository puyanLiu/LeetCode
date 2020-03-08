/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    var lastPlus = 1;
    for (var i = len - 1; i >= 0; i--) {
        let c = digits[i] + lastPlus;
        if (c > 9) {
            lastPlus = 1;
            digits[i] = 0;
            if (i == 0) {
                digits.splice(0, 0, 1);
            }
        } else {
            digits[i] = c;
            lastPlus = 0;
        }
    }
    return digits;
};
// @lc code=end

