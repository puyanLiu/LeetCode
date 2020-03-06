/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // return (num - 1) % 9 + 1;

    if (num == 0) return 0;
    return num % 9 == 0 ? 9 : num % 9;


    // let sum = 0;
    // do {
    //     sum += num >= 10 ? num % 10 : num;
    //     num = parseInt(num / 10);
    //     if (sum >= 10) {
    //         sum = parseInt(sum / 10) + sum % 10;
    //     }
    // } while(num > 0);
    // return sum;
};
// @lc code=end
