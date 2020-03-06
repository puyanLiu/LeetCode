/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    }
    var ways, np1 = 1, np2 = 2;
    for (var i = 3; i <= n; i++) {
        ways = np1 + np2;
        np1 = np2;
        np2 = ways;
    }
    return ways;
};
// @lc code=end

