/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sum = 0;
    while(x != 0) {
        sum = sum * 10 + x % 10; 
        x = parseInt(x / 10);
    }
    if (sum > -Math.pow(2, 31) && sum < Math.pow(2, 31) - 1) return sum;
    return 0;
};
// @lc code=end

